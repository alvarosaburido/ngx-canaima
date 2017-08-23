export class Action {
    public label: string;
    public callback: any;
    public icon: string;
    public iconActive: string;
    public size: string;
    public prefix: string;
    public customClass: string;
    constructor(
        label = null,
        callback = () => {
            console.log('Simple action');
        },
        icon = null,
        iconActive= null,
        customClass = 'btn-link',
        prefix = 'mdi',
        size = 'md'
    ) {
        this.label = label;
        this.icon = icon;
        this.iconActive = iconActive;
        this.prefix = prefix;
        this.customClass = customClass;
        this.callback = callback;
        this.size = size;
    }
}
