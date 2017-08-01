#1. git使用指南
##1. 安装
  首先安装 git , [下载地址](https://git-scm.com/downloads) ,
  安装后输入命令 `git` ,输出 `git` 相关命令即表示安装成功,
  然后进行初始化操作
  ```
  git config --global user.name "Your Name"
  git config --global user.email "email@example.com"
  ```
  - global: 表示全局安装
  - user.name: 用户名
  - email@example.com: 邮箱地址
## 2. 创建版本库(Repository)
  1.  创建一个文件夹 `demo`
  2.  `git init`  为`demo`文化初始化 一个 git仓库
  -   会在当前生成`.git`(该目录即为git仓库)的目录，`demo`目录是Git来跟踪管理版本库的,不可破坏(如果未看到,使用 `ls -ah` 查看隐藏文件夹)
  3.  编写 `readme.txt` 文件务必放到 `demo` 文件夹中,其内容如下
  ```
  Git is a version control system.
  Git is free software.
  ```
  4.  `git add` 将 `readme.txt` 准备添加到仓库中
  ```
    git add readme.txt
  ```
  5. 修改`readme.txt`文件,然后使用 `git commit -m "本次提交说明"` 将准备提交的文件合并到仓库同一文件中
  ```
  git commit -m "first use git"
  ```
  6. 使用 `git log`可以查看最近三次提交日志,直接使用会输出过多无用信息,一般跟上参数`--pretty=oneline`,只会输出每次提交的`commit id`及`每次提交说明`
  ```
  git log --pretty=oneline
  1c3bf6466326db96e84007049156aacaaf013666 first use git
  ```
  7. 版本回退:在`git`中使用 `HEAD`表示当前版本, `HEAD^`表示上个版本,`HEAD^^`表示上上个版本,`HEAD~n` 表示往上的第n个版本
    使用 `git reset` 可以会回退到以前版本
    ```
    git reset --hard HEAD^
    ```
    也可以回退到指定版本号
    ```
    git reset --hard 1c3bf64
    ```
    可以使用 `git reflog` 查看 `git` 操作历史,即可找到版本号
##  2.3 工作区与暂存区
  - 工作区: `demo` 文件夹
  - 暂存区: 存储每次 `git add` 操作的文件
  - `master`: 每次创建版本库,都会创建唯一一个 `master` 分支,使用 `git commit` 会将暂存区的文件全部提交到分支`master`上
  - 工作区的git仓库: `.git` 文件夹

## 5.github
由于本地Git仓库和GitHub仓库之间的传输是通过SSH加密,需要进行如下设置
1. 查看用户目录下有无 `.ssh` 目录,如果有,查看是否有`id_rsa`(私钥,注意不可泄漏)和`id_rsa.pub`(公钥,随意) 秘钥对文件,如果都有则跳过此步骤,否则进行输入以下代码进行 `SSH Key` 创建
```
ssh-keygen -t rsa -C "youremail@example.com"
```
安装过程一直回车即可
2. 关联 github
登录 `github` ,进入 `setting` 找到--> `SSH key` 设置选择新建一个 `SSH key` ,然后将`id_rsa.pub`(公钥)的内容复制到里面,然后保存即可
然后进行命令行输入以下代码与 `github` 进行关联
```
ssh -T git@github.com
```
这个也是一路回车即可
3. 上传项目到 `github`

- 首先在 `github` 新建一个版本库(本地项目名一致),并勾选初始选项,构建完成后,在项目右上角找到 `SSH` 地址(`SSH link`)进行复制以备使用
- 回到本地项目中执行 `git clone`将项目克隆到本地,并将该文件夹的全部内容拷贝到需要上传的项目文件中
- 在项目文件依次执行以下操作
```
git add .
git commit -m "写上本次提交描述"
git push origin master
```
即可
