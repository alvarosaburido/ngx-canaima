import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { ListsModule } from './lists/lists.module';
import { GridListsModule } from './grid-list/grid-list.module';
import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HeaderModule } from './header/header.module';
import { NavmenuModule } from './navmenu/navmenu.module';
import { SegmentModule } from './segment/segment.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ChipModule } from './chip/chip.module';
import { BadgesModule } from './badges/badges.module';
import { FabsModule } from './fabs/fabs.module';
import { AsModalModule } from './modals/modals.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { EmptyStateModule } from './empty-state/empty-state.module';
import { LoadingModule } from
'./loading/loading.module';
import { PreviewModule } from './preview/preview.module';
import { MediaUploaderModule } from './media-uploader/media-uploader.module';
import { DataTableModule } from './data-table/data-table.module';
import { ProfileDropdownModule } from './profile-dropdown/profile-dropdown.module';
import { ContentPlaceholderModule } from './content-placeholder/content-placeholder.module';
import { MiscModule } from './misc/misc.module';
import { FileButtonModule } from './file-button/file-button.module';

export * from './action';
export * from './action-dropdown';
export * from './preview';
export * from './cards';
export * from './forms';
export * from './lists';
export * from './grid-list';
export * from './segment';
export * from './navmenu';
export * from './toolbar';
export * from './header';
export * from './chip';
export * from './badges';
export * from './fabs';
export * from './modals';
export * from './search-bar';
export * from './loading';
export * from './empty-state';
export * from './misc';
export * from './profile-dropdown';
export * from './validation';
export * from './toggle';
export * from './media-uploader';
export * from './file-button';
export * from './data-table';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ListsModule,
    PreviewModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule,
    BadgesModule,
    FabsModule,
    AsModalModule,
    SearchBarModule,
    LoadingModule,
    EmptyStateModule,
    MediaUploaderModule,
    FileButtonModule,
    MiscModule,
    ContentPlaceholderModule,
    ProfileDropdownModule,
    DataTableModule
  ],
  declarations: [
  ],
  exports: [
    CardsModule,
    ListsModule,
    PreviewModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule,
    BadgesModule,
    FabsModule,
    AsModalModule,
    SearchBarModule,
    LoadingModule,
    EmptyStateModule,
    MediaUploaderModule,
    FileButtonModule,
    MiscModule,
    ContentPlaceholderModule,
    ProfileDropdownModule,
    DataTableModule
  ]
})
export class NgxCanaimaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxCanaimaModule,
      providers: []
    };
  }
}
