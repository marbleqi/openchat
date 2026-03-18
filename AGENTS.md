# AGENTS.md
本文件记录项目智能体工作规范、常用命令和协作流程。

## 1. 代理类型
| 代理类型 | 用途 |
|---------|------|
| general | 通用任务处理、多步骤复杂工作执行 |
| explore | 代码库探索、文件查找、代码结构分析 |

## 2. 常用命令
### 前端工作流
```bash
# 前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务
npm run dev

# 生产构建
npm run build

# 代码检查
npm run lint
```

### 后端工作流
```bash
# 后端目录
cd backend

# 安装依赖
npm install

# 启动开发服务
npm run dev

# 生产启动
npm run start

# 代码检查
npm run lint

# 运行测试
npm run test
```

### Git 工作流
```bash
# 查看工作区状态
git status

# 查看变更内容
git diff

# 提交代码
git add .
git commit -m "提交信息"

# 拉取最新代码
git pull origin main

# 推送代码
git push origin <分支名>
```

## 3. 代码规范
- 遵循项目现有代码风格
- 提交前运行 lint 检查
- 新功能需添加对应测试用例
- 代码提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

## 4. 任务流程
1. 接收任务后优先使用 `todowrite` 工具创建任务清单
2. 复杂代码库探索使用 `explore` 类型代理
3. 多步骤并行任务使用 `general` 类型代理
4. 完成任务后运行相关检查命令验证正确性
