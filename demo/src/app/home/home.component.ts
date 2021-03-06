import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';
import {
    ToastyService
} from 'ng2-toasty';
import {
    VERSION
} from './../core/constants';
import {
    Header
} from './../../../../src/header/header';
// tslint:disable-next-line:import-destructuring-spacing
import * as apiNpm from 'api-npm';

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit, AfterViewInit {
    public version: string;
    public openDropdown: boolean = false;
    public toolBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        }
    };
    public components = [{
            label: 'Cards',
            illustration: '/assets/svg/cards-illustration.svg',
            comming: false,
            slug: 'cards',
            // tslint:disable-next-line:max-line-length
            msg: `A card is a sheet of material that serves as an entry point to more detailed information.`
        },
        {
            label: 'Lists',
            illustration: '/assets/svg/lists-illustration.svg',
            comming: false,
            slug: 'lists',
            msg: `Lists present multiple line items vertically as a single continuous element`
        },
        {
            label: 'Forms',
            illustration: '/assets/svg/forms-illustration.svg',
            comming: false,
            slug: 'forms',
            msg: `Forms represent a way for the user to interact with the business logic`
        },
        {
            label: 'File Upload',
            illustration: '/assets/svg/fileupload-illustration.svg',
            /* comming: true, */
            slug: 'uploaders',
            // tslint:disable-next-line:max-line-length
            msg: `File uploaders allow you to save files, images, media to the Cloud. Just click it or drop it on`
        },
        {
            label: 'Data Table',
            illustration: '/assets/svg/datatable-illustration.svg',
            comming: false,
            slug: 'datatable',
            // tslint:disable-next-line:max-line-length
            msg: `Data table alow you to show a list of items with multiple, sortable fields`
        },
        {
            label: 'Layout',
            illustration: '/assets/svg/layout-illustration.svg',
            comming: false,
            slug: 'layout',
            // tslint:disable-next-line:max-line-length
            msg: `A layout list consists of a repeated pattern of cells arrayed in a vertical and horizontal layout.`
        },
        {
            label: 'Modals',
            illustration: '/assets/svg/modals-illustration.svg',
            comming: false,
            slug: 'modals',
            // tslint:disable-next-line:max-line-length
            msg: `Modals inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks..`
        },
        {
            label: 'Grid',
            illustration: '/assets/svg/grid-illustration.svg',
            comming: false,
            slug: 'grid',
            // tslint:disable-next-line:max-line-length
            msg: `A grid list consists of a repeated pattern of cells arrayed in a vertical and horizontal layout.`
        },
        {
            label: 'Miscellaneus',
            illustration: '/assets/svg/misc-illustration.svg',
            comming: false,
            slug: 'misc',
            // tslint:disable-next-line:max-line-length
            msg: `Just like Lorem Ipsum, a lot of random usefull stuff`
        }
    ];
    public header: Header = new Header({
        bg: '../assets/img/header-canaima.png',
        customClass: 'header-home',
        parallax: true
    });
    constructor(
        public toastService: ToastyService
    ) {
//
    }

    public ngOnInit() {
        //
    }
    public ngAfterViewInit(): void {
        /* this.getNpmData(); */
    }
    public getNpmData() {
        /* apiNpm.getdetails('ngx-canaima', (data) => {
            console.log('package', data['dist-tags'].latest);
            this.version =  data['dist-tags'].latest;
        }); */
    }
}
