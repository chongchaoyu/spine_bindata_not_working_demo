cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;


        cc.loader.loadRes("Spines/1001", sp.SkeletonData, function (err, asset) {
            var skeleton = this.node.addComponent(sp.Skeleton);
            skeleton.skeletonData = asset;
            skeleton.setAnimation(1, "daiji", true);
        }.bind(this));
    },

    // called every frame
    update: function (dt) {

    },
});
