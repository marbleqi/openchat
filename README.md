# OpenClaw Multi-Chat

基于 OpenClaw 的多人在线协作聊天系统，支持多用户注册、多群组聊天，与 AI 角色共同协作。

## 技术栈

- **前端**: Angular + ng-alain
- **后端**: NestJS + TypeORM
- **数据库**: PostgreSQL
- **缓存**: Redis
- **AI 底层**: OpenClaw Agent Control Protocol (ACP)

## 功能需求

- [x] 技术方案选型
- [ ] 用户邮箱注册登录
- [ ] 第一个注册用户默认为管理员
- [ ] 支持创建多个聊天群
- [ ] 不同工作任务分开沟通
- [ ] 集成 OpenClaw AI 能力

## 项目结构

```
├── backend/    # NestJS 后端服务
├── frontend/   # Angular ng-alain 前端
└── README.md   # 此文件
```

## 开发

```bash
# 启动后端
cd backend
yarn
yarn run start:dev

# 启动前端
cd frontend
yarn
yarn start
```
