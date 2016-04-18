(function(){
    angular.module('app.services')
        .service('toasterService', ToasterService);

        function ToasterService(toaster){
            return {
                message: message,
                saved: saved,
                deleted: deleted,
                info: info,
                warn: warn,
                error: error
            };

            function message(popupType, header, message, timeout) {
                timeout = timeout || 5000;
                toaster.pop(popupType, header, message, timeout);
            }

            function saved(msg) {
                msg = msg || 'Saved';
                this.message('success', '', msg);
            }

            function deleted(msg) {
                msg = msg || 'Deleted';
                this.message('success', '', msg);
            }

            function info(msg) {
                this.message('info', '', msg);
            }

            function warn(msg) {
                this.message('warning', '', msg);
            }

            function error(msg) {
                msg = msg || 'Error';
                this.pop('error', '', msg);
            }
        }
})();
