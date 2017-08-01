#1.git命令
## 1.1
  - `git config`: git配置
  - `git init`: git进行版本库初始化操作
  - `git add`: 添加文件到当前仓库中,可进行多次 `添加` 然后一并 `commit`
  - `git commit -m '本次提交相关说明'`: `git commit` 提交文件到仓库中,`-m`为提交说明
  - `git status`: 查看仓库当前的状态
  - `git diff 文件`: 查看本地 `文件` 与 仓库中 `同一文件` 的差异
  - `git log`: 查看`commit` 最近`3次`提交日志,使用`--pretty=oneline`参数关注主要提交信息
  - `git reset`: 根据参数回退到指定版本
  - `git reflog`: 查看 `git` 操作日志
## 1.2 多人协作相关
  - `git branch name`: 创建分支
  - `git merge xxx`: 将分支代码推给master分支
#2.常用命令
##2.1 文件操作相关
  - mkdir ... : 创建文件夹
  - cd ... : 进入文件夹
  - touch ...: 创建文件
  - dir: 显示文件夹目录
  - pwd: 显示当前目录
  - ls -ah: 显示隐藏文件夹
