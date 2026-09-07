"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const example = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import "@/styles/white-room.css";

export function ProjectSettings() {
  return (
    <div className="brand-theme brand-ui">
      <label htmlFor="project">Project name</label>
      <Input id="project" defaultValue="New experiment" />
      <label htmlFor="updates">Release updates</label>
      <Switch id="updates" defaultChecked />
      <Button>Save changes</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  );
}`;

export function ComponentPlayground() {
  const [tab, setTab] = useState<string | number>("preview");
  const [projectName, setProjectName] = useState("New experiment");
  const [updates, setUpdates] = useState(true);
  const [saved, setSaved] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  function saveExample(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectName.trim()) {
      setError("Give your project a name.");
      setSaved("");
      return;
    }
    setError("");
    setSaved(
      `Saved for this preview: ${projectName.trim()}. Release updates ${updates ? "on" : "off"}.`,
    );
  }

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(example);
      setCopied(true);
      setCopyMessage("Component example copied.");
    } catch {
      setCopyMessage("Copy is unavailable here. Select the code below to copy it.");
    }
  }

  return (
    <div className="brand-ui brand-playground">
      <Tabs value={tab} onValueChange={setTab}>
        <div className="brand-playground-heading">
          <TabsList variant="line" aria-label="Component example view">
            <TabsTrigger value="preview">Live examples</TabsTrigger>
            <TabsTrigger value="code">Use in a project</TabsTrigger>
          </TabsList>
          <span className="brand-eyebrow">SHADCN/UI · BASE UI</span>
        </div>
        <TabsContent value="preview">
          <div className="brand-component-actions">
            <span className="brand-eyebrow">ACTIONS</span>
            <div className="brand-button-row">
              <Dialog>
                <DialogTrigger render={<Button />}>
                  Open a dialog <ArrowUpRight size={16} />
                </DialogTrigger>
                <DialogContent className="brand-theme brand-ui">
                  <DialogHeader>
                    <DialogTitle>Room for a decision.</DialogTitle>
                    <DialogDescription>
                      A quiet surface for a focused task. Keyboard focus stays here
                      until you close it. Press Escape or use the close button to
                      return.
                    </DialogDescription>
                  </DialogHeader>
                  <span className="brand-eyebrow">DIALOG / WHITE ROOM</span>
                </DialogContent>
              </Dialog>
              <Button variant="outline" onClick={() => setTab("code")}>
                View component code
              </Button>
              <Button disabled>Unavailable</Button>
            </div>
          </div>
          <div className="brand-component-grid">
            <form className="brand-component-form" onSubmit={saveExample} noValidate>
              <span className="brand-eyebrow">INPUTS & CONTROLS</span>
              <label htmlFor="brand-project">Project name</label>
              <Input
                id="brand-project"
                value={projectName}
                onChange={(event) => {
                  setProjectName(event.target.value);
                  setSaved("");
                  setError("");
                }}
                aria-invalid={!!error}
                aria-describedby={error ? "brand-project-error" : "brand-demo-note"}
              />
              {error ? (
                <p className="brand-field-error" id="brand-project-error" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="brand-switch-row">
                <div>
                  <label htmlFor="brand-updates">Release updates</label>
                  <p>Include release notes in this example.</p>
                </div>
                <Switch
                  id="brand-updates"
                  checked={updates}
                  onCheckedChange={(value) => {
                    setUpdates(value);
                    setSaved("");
                  }}
                />
              </div>
              <Button type="submit">Save changes</Button>
              <p className="brand-demo-note" id="brand-demo-note">
                Interactive example. Changes reset on refresh.
              </p>
              <p className="brand-save-status" role="status">
                {saved}
              </p>
            </form>
            <div className="brand-component-states">
              <span className="brand-eyebrow">STATUS & FEEDBACK</span>
              <div className="brand-badge-row">
                <span className="brand-badge brand-badge-accent">Prototype</span>
                <span className="brand-badge">Active</span>
                <span className="brand-badge brand-badge-muted">Archived</span>
              </div>
              <p>
                Use words to make maturity clear. A project’s status belongs beside its
                name.
              </p>
              <div className="brand-example-notice">
                <Check size={18} />
                <div>
                  <h3>Changes saved</h3>
                  <p>
                    Short, specific feedback. Say what happened and keep the next step
                    clear.
                  </p>
                </div>
              </div>
              <div className="brand-focus-example">
                <span className="brand-eyebrow">FOCUS / KEYBOARD</span>
                <p>
                  Press Tab to explore. A crisp ink outline keeps focus visible on every
                  surface.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="brand-code-panel">
          <div className="brand-code-heading">
            <div>
              <h3>Keep behavior. Add the brand.</h3>
              <p>
                Use shadcn’s Base UI components, import the theme, and wrap your UI.
                Apply the same classes to dialog content rendered in a portal.
              </p>
            </div>
            <Button variant="outline" onClick={copyExample}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy code"}
            </Button>
          </div>
          <pre>
            <code>{example}</code>
          </pre>
          <p role="status" className="brand-demo-note">
            {copyMessage}
          </p>
          <div className="brand-code-links">
            <a href="/brand/white-room.css" download>
              Download the theme ↓
            </a>
            <a href="https://ui.shadcn.com/docs">shadcn documentation ↗</a>
            <a href="https://base-ui.com/react/overview/quick-start">
              Base UI documentation ↗
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
