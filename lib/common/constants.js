// Constants.js
var pkg = require( "../../package.json" ),
    osFileManagerName = require( "../utils/os-util" ).getFileManagerDisplayName;

exports.APP = {
    name: pkg.name,
    title: pkg.title,
    version: pkg.version
};

exports.MESSAGES = {
    ERROR: {
        BAD_LINK: "Couldn't open file: "
    },
    FILEMANAGER: osFileManagerName(),
    STATUS: {
    	OK_SMB_AFP_CONFIGURED: 'SMB / AFP configured successfully. Re-click link to choose default app to open links. (e.g. /usr/bin/nautilus in Ubuntu)'
    }
};
