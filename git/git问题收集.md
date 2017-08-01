###1. 解决ssh-connect-to-host-github-com-port-22-connection-timed-out
打开命令行工具
```
cd ~
cd .ssh
touch config  (!!! 没有后缀)
sub config    (打开config文件)
```
存入以下信息
```
Host github.com
User example@exam.com
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```
最好重新配置本机信息
```
git config --global user.name "Lelov"
git config --global user.email "hurenzdl@gmail.com"
```
输入以下关联github账号
```
ssh -T git@github.com
```
### 2. git上传忽略node_modules
在项目根目录创建`.gitignore`,输入
```
node_modules
```