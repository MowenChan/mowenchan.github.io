# GitLab
## install
[offical](https://about.gitlab.com/install)
### centOs
```sh
sudo dnf install -y curl policycoreutils openssh-server perl
# Enable OpenSSH server daemon if not enabled: sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
# Check if opening the firewall is needed with: sudo systemctl status firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```
```sh
sudo dnf install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```