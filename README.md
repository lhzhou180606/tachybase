> [!CAUTION]
> Tachybase is still in the alpha stage. If you plan to use it in production, please proceed with caution. The codebase contains many experimental features and will undergo significant refactoring. Please feel free to contact us if you encounter any issues.

<h1 align="center" style="border-bottom: none">
    <div>
        <a style="color:#36f" href="https://www.tachybase.com">
            <img src="https://tachybase-1321007335.cos.ap-shanghai.myqcloud.com/3733d6bd0a3376a93ba6180b32194369.png" width="80" />
            <br>
            Tachybase
        </a>
    </div>
</h1>

<br>

<p align="center">
  Tachybase is a highly flexible application system, where developers can build complex application logic, while core developers focus on ensuring the stability of key modules and adapting to different environments. 
</p>
<p align="center">
  [English Version][<a href="https://tachybase.org">DOCS</a>][<a href="./README.ZH-CN.md">中文版本</a>]
</p>

# Project Overview

Tachybase is designed with a three-layer structure: Kernel Layer, Module Layer, and Plugin Layer.

- __Kernel Layer__ provides core plugin mechanisms and unified interfaces.
- __Module Layer__ implements specific application functions, such as building a low-code platform or creating a service orchestration tool with Tachybase.
- __Plugin Layer__ offers more choices, for example, in the authentication module, different authentication sources can be implemented as plugins.

Currently, Tachybase aims to handle the framework's core functions and some common business logic, while providing low-code and AI capabilities for easier use. In the future, Tachybase will evolve into a flexible foundation, with different product layers based on it, offering unique positioning. Future versions will continue along the core, module, and plugin design route, while becoming increasingly productized.

# Development Roadmap

The following is an overview of the development roadmap. The detailed plan will be published before the Chinese New Year along with the relevant application templates.

- [x] Kernel: Kernel API
- [ ] Kernel: Message Mechanism
- [ ] Kernel: Module API
- [x] Module: Ant Design-based UI Library
- [x] Module: Workflow
- [x] Module: No-code Capability
- [ ] Module: Cloud Functions
- [ ] Module: Cloud Components
- [ ] Module: Message Queue
- [ ] Module: Scheduled Tasks
- [x] Plugin: Workflow - Approval
- [ ] Plugin: Workflow - Data Templates

UI planning principles: The core mechanisms are designed in the Kernel Layer, and the specific components are provided in the Module Layer.

- [x] Kernel: Modal Interaction (for context-sensitive interactions)
- [x] Kernel: Tab Interaction (for interactions when a single page cannot contain too much content)
- [ ] Kernel: Independent Pages (for core or shared content)
- [x] Module: Basic Components (single-line text, multi-line text, numbers, etc.)
- [x] Module: Related Components (sub-table, sub-detail, etc.)
- [x] Module: Specialized Components (dashboard, calendar, Gantt chart, file browser, etc.)


# Try

[Demo application](https://demos.tachybase.com/admin/628sp6la1mw) 

- Username：`tachybase` 
- Password：`!Admin123.`

This version is still under development and is expected to go live before Chinese New Year. It is currently available for testing. Please contact us for more information.

# Quick Start

```bash 
pnpm install
pnpm tachybase install
pnpm dev
```

Default username：`tachybase`，password: `!Admin123.`
The default database is `sqlite`. It is recommended to use a relational database for production environments.

# License

This project is licensed under the [Apache 2.0](LICENSE) License。

# Third-party Code Notice

The project includes a significant amount of code from third-party libraries such as RequireJS, JsonLogic, NocoBase, Formily, and Ant Design (antd). This code adheres to their original licenses and agreements. It will be gradually rewritten in the future. Please be mindful of this when using it in the early stages of the project.

# Contributing

- Provide background information on deployment and usage, and describe the situations where the current system services fall short. Depending on the impact, we will categorize this into different development levels (Kernel, Module, or Plugin).
- Share usage cases where the current interaction methods do not meet your needs. We will address these based on their impact level.
- You are welcome to directly contribute code. We currently do not have a dedicated community group, but you can submit ideas through tickets, and we can discuss them together.
