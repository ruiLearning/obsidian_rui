/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => VimToggle
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  notification: true,
  debug: false,
  canvasVim: false
};
var VimToggle = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "toggle-vim",
      name: "Toggle Vim On/Off",
      callback: () => {
        this.toggleVimMode();
      }
    });
    this.addCommand({
      id: "turn-on-vim",
      name: "Turn On Vim Mode",
      callback: () => {
        this.turnOnVimMode();
      }
    });
    this.addCommand({
      id: "turn-off-vim",
      name: "Turn Off Vim Mode",
      callback: () => {
        this.turnOffVimMode();
      }
    });
    this.addSettingTab(new VimToggleSettingsTab(this.app, this));
    this.addRibbonIcon("text-cursor-input", "Toggle Vim Mode", () => {
      this.toggleVimMode();
    });
    this.registerEvent(
      this.app.workspace.on(
        "file-open",
        (file) => {
          if (!file || !this.settings.canvasVim)
            return;
          if (file.extension == "canvas") {
            this.turnOffVimMode();
          } else {
            this.turnOnVimMode();
          }
        }
      )
    );
  }
  toggleVimMode() {
    if (this.getVimMode()) {
      this.turnOffVimMode();
    } else {
      this.turnOnVimMode();
    }
    if (this.settings.notification) {
      new import_obsidian.Notice(
        "Vim mode toggled to " + this.getVimMode(),
        2e3
      );
    }
  }
  turnOffVimMode() {
    this.app.vault.setConfig("vimMode", false);
  }
  turnOnVimMode() {
    this.app.vault.setConfig("vimMode", true);
  }
  getVimMode() {
    return this.app.vault.getConfig("vimMode");
  }
  onunload() {
    console.log("unloading plugin: " + this.manifest.name);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var VimToggleSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for Vim Toggle" });
    new import_obsidian.Setting(containerEl).setName("Notification").setDesc("Show notification when toggling vim mode.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.notification).onChange(async (value) => {
        this.plugin.settings.notification = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Debug").setDesc(
      "Show debug messages in the console whilst performing operations with the plugin."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.debug).onChange(async (value) => {
        this.plugin.settings.debug = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Canvas Off").setDesc(
      "When switching to a Canvas, turn vim off, and when not in Canvas, turn vim on."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.canvasVim).onChange(async (value) => {
        this.plugin.settings.canvasVim = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("hr");
    new import_obsidian.Setting(containerEl).setName("Repository").setDesc("Link to the repository of the plugin.").addButton(
      (button) => button.setButtonText("Open Repository").setCta().onClick(() => {
        open("https://github.com/conneroisu/vim-toggle-obsidian");
      })
    );
    new import_obsidian.Setting(containerEl).setName("Report Issue").setDesc("Report an issue or wanted feature with the plugin.").addButton(
      (button) => button.setButtonText("Report Issue/Feature").setCta().onClick(() => {
        open("https://github.com/conneroisu/vim-toggle-obsidian/issues/new");
      })
    );
    new import_obsidian.Setting(containerEl).setName("Create Pull Request").setDesc("Developer? Create a pull request to the Vim Toggle.").addButton(
      (button) => button.setButtonText("Create Pull Request").setCta().onClick(() => {
        open("https://github.com/conneroisu/vim-toggle-obsidian/compare");
      })
    );
    containerEl.createEl("hr");
    containerEl.createEl("h2", { text: "About Vim Toggle" });
    containerEl.createEl("p", { text: "This plugin was created by Conner Ohnesorge" });
    new import_obsidian.Setting(containerEl).setName("Portfolio").setDesc("Go to my portfolio website.").addButton(
      (button) => button.setButtonText("Go to Portfolio").setCta().onClick(() => {
        open("https://conneroh.com");
      })
    );
    new import_obsidian.Setting(containerEl).setName("Kofi").setDesc("Buy me a coffee!").addButton(
      (button) => button.setButtonText("Buy Me A Coffee").setCta().onClick(() => {
        open("https://ko-fi.com/conneroisu");
      })
    );
  }
};
/**
 * @author Conner Ohnesorge (@conneroisu) [connerohnesorge.mixa.site]
 * @summary This is the source code for the Vim Toggle plugin.
 * @version 1.0.0
 * @license MIT
 * Main class of the plugin, Vim Toggle.It allows for a user to toggle
 * the state of the vim editor inside obsidian with a single command
 * helpful for switching from the Vim Editor whilst working on a canvas file.
 */

/* nosourcemap */