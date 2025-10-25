export function getModalCodeSnippet(): string {
  return `
import { useMemo } from 'react'
import { Button, Modal, useModalManager, ModalProvider } from '@abhishekbarve/components'
import '@abhishekbarve/components/styles'

function ModalDemoContent() {
  const { openModal, closeModal } = useModalManager()

  const open = () => openModal('modal-demo')
  const handleConfirm = () => closeModal('modal-demo')

  const modalDescriptionId = useMemo(() => 'modal-demo-description', [])

  return (
    <div className='flex w-full flex-col items-start gap-4 p-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-base font-medium text-foreground'>Project Modal</h3>
        <p className='text-sm text-muted-foreground'>
          Click the button below to preview the modal component with a simple confirmation layout.
        </p>
      </div>

      <Button onClick={open} variant='primary'>
        Launch modal
      </Button>

      <Modal id='modal-demo' aria-describedby={modalDescriptionId} aria-labelledby='modal-demo-title'>
        <Modal.Header withCloseButton>
          <span id='modal-demo-title'>Update availability</span>
        </Modal.Header>

        <Modal.Body>
          <p id={modalDescriptionId} className='text-sm text-muted-foreground'>
            Switch your status to <span className='font-medium text-foreground'>Available</span> so teammates
            know they can request feedback.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Modal.CloseButton variant='button'>Cancel</Modal.CloseButton>
          <Button size='sm' onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function ModalDemo() {
  return (
    <ModalProvider>
      <ModalDemoContent />
    </ModalProvider>
  )
}

export default ModalDemo
`;
}

export function getControlledModalCodeSnippet(): string {
  return `
import { useMemo, useState } from 'react'
import { Button, ControlledModal } from '@abhishekbarve/components'
import '@abhishekbarve/components/styles'

function ControlledModalDemo() {
  const [open, setOpen] = useState(false)

  const titleId = useMemo(() => 'controlled-modal-demo-title', [])
  const descriptionId = useMemo(() => 'controlled-modal-demo-description', [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="flex w-full flex-col items-start gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium text-foreground">Controlled Modal</h3>
        <p className="text-sm text-muted-foreground">
          Manually manage the modal state using the <code>ControlledModal</code> wrapper.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={handleOpen} variant="outline">
          Open controlled modal
        </Button>
        <span className="text-xs text-muted-foreground">
          Current state: <span className="font-medium text-foreground">{open ? 'Open' : 'Closed'}</span>
        </span>
      </div>

      <ControlledModal
        id='controlled-modal-demo'
        open={open}
        onClose={handleClose}
        onToggle={setOpen}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        blurBackground={false}
      >
        <ControlledModal.Header withCloseButton>
          <span id={titleId}>Schedule downtime</span>
        </ControlledModal.Header>

        <ControlledModal.Body>
          <p id={descriptionId} className="text-sm text-muted-foreground">
            We will notify teammates that you are out of office and pause all notifications until you turn
            availability back on.
          </p>
        </ControlledModal.Body>

        <ControlledModal.Footer>
          <ControlledModal.CloseButton variant="button">Cancel</ControlledModal.CloseButton>
          <Button size="sm" onClick={handleClose}>
            Set to away
          </Button>
        </ControlledModal.Footer>
      </ControlledModal>
    </div>
  )
}

export default ControlledModalDemo
`
}