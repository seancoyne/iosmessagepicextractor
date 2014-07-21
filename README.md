To extract all photos & videos (extensions: jpg, jpeg, png, mov, gif) from the Messages app in an iOS backup...

1. clone this repo
2. `cd iosmessagepicextractor`
3. `git submodule init && git submodule update` to install some dependencies
4. `npm install` to install more dependencies
5. copy your iOS backup from `~/Library/Application Support/MobileSync/Backup/` to `./backup`
6. `export PERLLIB=iOSMessageExport/`
7. extract ios messages... `perl iOSMessageExport/backup.pl --directory_path backup/` all your messages will be in `./export`
8. extract photos... `node index.js` all your photos will be in `_photos`