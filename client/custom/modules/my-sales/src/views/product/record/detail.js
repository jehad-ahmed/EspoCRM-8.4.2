
define('my-sales:views/product/record/detail', ['views/record/detail'], function (Dep) {

    return Dep.extend({

        setup: function () {
            Dep.prototype.setup.call(this);
            this.model.on('change:requiredQuantity', this.afterRender, this);
        },
        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            if(this.model.get('requiredQuantity') && this.model.get('salePrice')){
                this.model.set('totalPrice', this.model.get('requiredQuantity') * this.model.get('salePrice'));
                this.model.set('totalQuantity', this.model.get('totalQuantity') - this.model.get('requiredQuantity'));
                this.model.save({totalQuantity: this.model.get('totalQuantity')},{patch: true});
                this.model.save({totalPrice: this.model.get('totalPrice')},{patch: true});
            }

        }
    });
});
