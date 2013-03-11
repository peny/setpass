setpass
=======

Change your password for popular services from your command line

## Currently supported services
* facebook
* github
* twitter
* gmail

## Usage

```bash
$ npm install -g setpass

$ setpass --service twitter --username username --password pass --newpassword word
```

*__username__, __password__ and __newpassword__ are all optional, there is a pretty CLI interface waiting for you if you skip any of them*

```bash
$ setpass --service gmail
```

###Did you know:
Under some distros a space before a bash command will cause it not to be saved to history

## Options
```
Options:
  --service, -s             Service to change password for                [required]
  --username, -u            Username
  --password, -p            Current password
  --newpassword, -n         New password
  --silent                  Do not log password change status
```
