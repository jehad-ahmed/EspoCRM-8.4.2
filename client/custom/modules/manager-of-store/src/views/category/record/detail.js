
define('manager-of-store:views/category/record/detail', ['views/record/detail'], function (Dep) {

    return Dep.extend({

        setup: function () {
            Dep.prototype.setup.call(this);
          // let totalPrice = this.getMetadata().get(['entityDefs', 'category', 'fields', 'totalPrice']);
            console.log('ssssss');
        },

        // manageAccessEdit: function (second) {
        //     Dep.prototype.manageAccessEdit.call(this, second);
        //
        //     if (second) {
        //         if (!this.getAcl().checkModel(this.model, 'edit', true)) {
        //             this.hideActionItem('setCompleted');
        //         }
        //     }
        // },
        //
        // actionSetCompleted: function () {
        //     this.model.save({status: 'Completed'}, {patch: true})
        //         .then(() => Espo.Ui.success(this.translate('Saved')));
        //
        // },
    });
});
