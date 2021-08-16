# CentOS
## yum
### commands
-	cache
	-	`yum makecache`
-	Searching packages
	-	`yum search ${package.name}`
	-	`yum search ${package.name|summary|description}`
-	Listing packages
	-	`yum list --installed`
	-	`yum list --available`
	-	`yum list --all`=`yum list --installed && yum list --available`
-	Displaying package infomation
	-	`yum info ${package.name}`
-	Listing package groups
	-	`yum group summary`
	-	`yum group list`
	
-	Listing repositories
	-	`yum 	`
	-	`yum repolist --disabled`
	-	`yum repolist --all`=`yum repolist && yum repolist --disabled`
	-	`yum repoinfo`
### configuration
## firewall
```sh
firewall-cmd --zone=public --list-ports
firewall-cmd --zone=public --add-port=80/tcp --permanent
```