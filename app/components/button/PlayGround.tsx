"use client";
import { useState, useMemo } from "react";
import {
  Card,
  type CardProps,
  Tabs,
  type TabsProps,
  Input,
  Select,
  Switch,
  type SwitchProps,
  Button,
} from "@abhishekbarve/components";
import { FiCheck, FiArrowRight } from "react-icons/fi";

function PlaygroundBlock() {
  const [label, setLabel] = useState("Get started");
  const [variant, setVariant] =
    useState<keyof typeof Button.variants>("primary");
  const [size, setSize] = useState<keyof typeof Button.sizes>("md");
  const [type, setType] = useState<"button" | "submit" | "reset">("button");
  const [disabled, setDisabled] = useState(false);
  const [active, setActive] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [leftIcon, setLeftIcon] = useState(true);
  const [rightIcon, setRightIcon] = useState(false);

  const code = useMemo(() => {
    const props: string[] = [];
    if (variant && variant !== "default") props.push(`variant="${variant}"`);
    if (size && size !== "default") props.push(`size="${size}"`);
    if (type && type !== "button") props.push(`type="${type}"`);
    if (disabled) props.push("disabled");
    if (active) props.push("active");
    if (fullWidth) props.push('className="w-full"');

    const open = props.length > 0 ? `<Button ${props.join(" ")}>` : `<Button>`;
    const iconLeft = leftIcon ? `<FiCheck className=\"me-2\" /> ` : "";
    const iconRight = rightIcon ? ` <FiArrowRight className=\"ms-2\" />` : "";

    const body = `${iconLeft}${label || "Button"}${iconRight}`;
    const buttonJsx = `${open}${body}</Button>`;

    const iconImport =
      leftIcon || rightIcon
        ? `import { FiCheck, FiArrowRight } from "react-icons/fi";\n`
        : "";
    return `import { Button } from "@abhishekbarve/components";\n${iconImport}\nexport default function Example() {\n  return (\n    ${buttonJsx}\n  );\n}`;
  }, [
    variant,
    size,
    type,
    disabled,
    active,
    fullWidth,
    leftIcon,
    rightIcon,
    label,
  ]);

  return (
    <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
      <Card.Header>
        <Card.Title>Playground</Card.Title>
        <Card.Description>
          Tweak props and see both the component and code update
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Panel */}
          <div className="space-y-6 lg:order-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Controls
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Label
                  </label>
                  <Input>
                    <Input.Field
                      name="label"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      placeholder="Get started"
                      className="text-sm"
                    />
                  </Input>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Variant
                  </label>
                  <Select
                    value={variant}
                    onValueChange={(value) =>
                      setVariant(value as keyof typeof Button.variants)
                    }
                  >
                    <Select.Trigger className="w-full text-sm">
                      <Select.Value placeholder="Select variant" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item key="default" value="default">
                        default
                      </Select.Item>
                      <Select.Item key="primary" value="primary">
                        primary
                      </Select.Item>
                      <Select.Item key="secondary" value="secondary">
                        secondary
                      </Select.Item>
                      <Select.Item key="outline" value="outline">
                        outline
                      </Select.Item>
                      <Select.Item key="ghost" value="ghost">
                        ghost
                      </Select.Item>
                      <Select.Item key="link" value="link">
                        link
                      </Select.Item>
                      <Select.Item key="destructive" value="destructive">
                        destructive
                      </Select.Item>
                    </Select.Content>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Size
                  </label>
                  <Select
                    value={size}
                    onValueChange={(value) =>
                      setSize(value as keyof typeof Button.sizes)
                    }
                  >
                    <Select.Trigger className="w-full text-sm">
                      <Select.Value placeholder="Select size" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item key="default" value="default">
                        default
                      </Select.Item>
                      <Select.Item key="sm" value="sm">
                        sm
                      </Select.Item>
                      <Select.Item key="md" value="md">
                        md
                      </Select.Item>
                      <Select.Item key="lg" value="lg">
                        lg
                      </Select.Item>
                      <Select.Item key="xl" value="xl">
                        xl
                      </Select.Item>
                    </Select.Content>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Type
                  </label>
                  <Select
                    value={type}
                    onValueChange={(value) =>
                      setType(value as "button" | "submit" | "reset")
                    }
                  >
                    <Select.Trigger className="w-full text-sm">
                      <Select.Value placeholder="Select type" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item key="button" value="button">
                        button
                      </Select.Item>
                      <Select.Item key="submit" value="submit">
                        submit
                      </Select.Item>
                    </Select.Content>
                  </Select>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Options
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Disabled
                      </span>
                      <Switch
                        checked={disabled}
                        onCheckedChange={setDisabled}
                        aria-label="Disabled"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Active
                      </span>
                      <Switch
                        checked={active}
                        onCheckedChange={setActive}
                        aria-label="Active"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Full width
                      </span>
                      <Switch
                        checked={fullWidth}
                        onCheckedChange={setFullWidth}
                        aria-label="Full width"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Left icon
                      </span>
                      <Switch
                        checked={leftIcon}
                        onCheckedChange={setLeftIcon}
                        aria-label="Left icon"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Right icon
                      </span>
                      <Switch
                        checked={rightIcon}
                        onCheckedChange={setRightIcon}
                        aria-label="Right icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component and Code */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="component" className="space-y-4">
              <Tabs.List>
                <Tabs.Trigger value="component">Preview</Tabs.Trigger>
                <Tabs.Trigger value="code">Code</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="component">
                <div className="flex items-center justify-center p-8 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-800/50">
                  <Button
                    variant={
                      variant === "default"
                        ? undefined
                        : (variant as keyof typeof Button.variants)
                    }
                    size={
                      size === "default"
                        ? undefined
                        : (size as keyof typeof Button.sizes)
                    }
                    type={type}
                    disabled={disabled}
                    active={active}
                    className={fullWidth ? "w-full" : undefined}
                  >
                    {leftIcon && <FiCheck className="me-2" />}
                    {label}
                    {rightIcon && <FiArrowRight className="ms-2" />}
                  </Button>
                </div>
              </Tabs.Content>

              <Tabs.Content value="code">
                <pre className="rounded-lg bg-slate-950/95 text-slate-100 p-4 overflow-auto text-sm border border-slate-200 dark:border-slate-700">
                  {code}
                </pre>
              </Tabs.Content>
            </Tabs>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

export default PlaygroundBlock;
