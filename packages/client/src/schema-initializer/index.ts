import { Plugin } from '../application/Plugin';
import { CreateChildInitializer } from '../modules/actions/add-child/CreateChildInitializer';
import { CreateActionInitializer } from '../modules/actions/add-new/CreateActionInitializer';
import { createFormBlockInitializers } from '../modules/actions/add-new/createFormBlockInitializers';
import { CustomizeAddRecordActionInitializer } from '../modules/actions/add-record/CustomizeAddRecordActionInitializer';
import { customizeCreateFormBlockInitializers } from '../modules/actions/add-record/customizeCreateFormBlockInitializers';
import { BulkDestroyActionInitializer } from '../modules/actions/bulk-destroy/BulkDestroyActionInitializer';
import { DestroyActionInitializer } from '../modules/actions/delete/DestroyActionInitializer';
import { DisassociateActionInitializer } from '../modules/actions/disassociate/DisassociateActionInitializer';
import { ExpandableActionInitializer } from '../modules/actions/expand-collapse/ExpandableActionInitializer';
import { FilterActionInitializer } from '../modules/actions/filter/FilterActionInitializer';
import { RefreshActionInitializer } from '../modules/actions/refresh/RefreshActionInitializer';
import { SaveRecordActionInitializer } from '../modules/actions/save-record/SaveRecordActionInitializer';
import { CreateSubmitActionInitializer } from '../modules/actions/submit/CreateSubmitActionInitializer';
import { UpdateSubmitActionInitializer } from '../modules/actions/submit/UpdateSubmitActionInitializer';
import { UpdateRecordActionInitializer } from '../modules/actions/update-record/UpdateRecordActionInitializer';
import { PopupActionInitializer } from '../modules/actions/view-edit-popup/PopupActionInitializer';
import { recordFormBlockInitializers } from '../modules/actions/view-edit-popup/RecordFormBlockInitializers';
import { UpdateActionInitializer } from '../modules/actions/view-edit-popup/UpdateActionInitializer';
import { ViewActionInitializer } from '../modules/actions/view-edit-popup/ViewActionInitializer';
import { detailsActionInitializers } from '../modules/blocks/data-blocks/details-multi/DetailsActionInitializers';
import { DetailsBlockInitializer } from '../modules/blocks/data-blocks/details-multi/DetailsBlockInitializer';
import { readPrettyFormActionInitializers } from '../modules/blocks/data-blocks/details-single/ReadPrettyFormActionInitializers';
import { readPrettyFormItemInitializers } from '../modules/blocks/data-blocks/details-single/ReadPrettyFormItemInitializers';
import { RecordReadPrettyFormBlockInitializer } from '../modules/blocks/data-blocks/details-single/RecordReadPrettyFormBlockInitializer';
import { createFormActionInitializers } from '../modules/blocks/data-blocks/form/createFormActionInitializers';
import { CreateFormBlockInitializer } from '../modules/blocks/data-blocks/form/CreateFormBlockInitializer';
import { formActionInitializers } from '../modules/blocks/data-blocks/form/formActionInitializers';
import { FormBlockInitializer } from '../modules/blocks/data-blocks/form/FormBlockInitializer';
import { formItemInitializers } from '../modules/blocks/data-blocks/form/formItemInitializers';
import { RecordFormBlockInitializer } from '../modules/blocks/data-blocks/form/RecordFormBlockInitializer';
import { updateFormActionInitializers } from '../modules/blocks/data-blocks/form/updateFormActionInitializers';
import { gridCardActionInitializers } from '../modules/blocks/data-blocks/grid-card/GridCardActionInitializers';
import { GridCardBlockInitializer } from '../modules/blocks/data-blocks/grid-card/GridCardBlockInitializer';
import { gridCardItemActionInitializers } from '../modules/blocks/data-blocks/grid-card/gridCardItemActionInitializers';
import { listActionInitializers } from '../modules/blocks/data-blocks/list/ListActionInitializers';
import { ListBlockInitializer } from '../modules/blocks/data-blocks/list/ListBlockInitializer';
import { listItemActionInitializers } from '../modules/blocks/data-blocks/list/listItemActionInitializers';
import { TableSelectorInitializer } from '../modules/blocks/data-blocks/table-selector/TableSelectorInitializer';
import { tableActionColumnInitializers } from '../modules/blocks/data-blocks/table/TableActionColumnInitializers';
import { tableActionInitializers } from '../modules/blocks/data-blocks/table/TableActionInitializers';
import { TableBlockInitializer } from '../modules/blocks/data-blocks/table/TableBlockInitializer';
import { tableColumnInitializers } from '../modules/blocks/data-blocks/table/TableColumnInitializers';
import { FilterCollapseBlockInitializer } from '../modules/blocks/filter-blocks/collapse/FilterCollapseBlockInitializer';
import { filterFormActionInitializers } from '../modules/blocks/filter-blocks/form/FilterFormActionInitializers';
import { FilterFormBlockInitializer } from '../modules/blocks/filter-blocks/form/FilterFormBlockInitializer';
import { filterFormItemInitializers } from '../modules/blocks/filter-blocks/form/filterFormItemInitializers';
import { MarkdownBlockInitializer } from '../modules/blocks/other-blocks/markdown/MarkdownBlockInitializer';
import { MarkdownFormItemInitializer } from '../modules/blocks/other-blocks/markdown/MarkdownFormItemInitializer';
import { tableSelectorInitializers } from '../modules/fields/component/Picker/TableSelectorInitializers';
import { CollectionFieldInitializer } from '../modules/fields/initializer/CollectionFieldInitializer';
import { TableCollectionFieldInitializer } from '../modules/fields/initializer/TableCollectionFieldInitializer';
import { menuItemInitializer, menuItemInitializer_deprecated } from '../modules/menu/menuItemInitializer';
import { blockInitializers } from '../modules/page/BlockInitializers';
import {
  customFormItemInitializers,
  recordBlockInitializers,
  subTableActionInitializers,
  tabPaneInitializers_deprecated,
  tabPaneInitializersForBulkEditFormBlock,
  tabPaneInitializersForRecordBlock,
} from './buttons';
import * as initializerComponents from './components';
import * as items from './items';
import { FilterFormItemCustom } from './items';

export * from './buttons';
export * from './items';
export {
  createDetailsBlockSchema,
  createFormBlockSchema,
  createReadPrettyFormBlockSchema,
  createTableBlockSchema,
  gridRowColWrap,
  itemsMerge,
  useAssociatedFormItemInitializerFields,
  useAssociatedTableColumnInitializerFields,
  useCollectionDataSourceItems,
  useCurrentSchema,
  useFormItemInitializerFields,
  useInheritsTableColumnInitializerFields,
  useRecordCollectionDataSourceItems,
  useRemoveGridFormItem,
  useTableColumnInitializerFields,
} from './utils';

export class SchemaInitializerPlugin extends Plugin {
  async load() {
    this.app.addComponents({
      ...initializerComponents,
      ...items,
      DestroyActionInitializer,
      CreateFormBlockInitializer,
      FormBlockInitializer,
      RecordFormBlockInitializer,
      TableBlockInitializer,
      TableSelectorInitializer,
      RecordReadPrettyFormBlockInitializer,
      DetailsBlockInitializer,
      ListBlockInitializer,
      GridCardBlockInitializer,
      FilterFormBlockInitializer,
      FilterCollapseBlockInitializer,
      MarkdownBlockInitializer,
      MarkdownFormItemInitializer,
      TableCollectionFieldInitializer,
      CollectionFieldInitializer,
      CreateActionInitializer,
      CustomizeAddRecordActionInitializer,
      CreateChildInitializer,
      ViewActionInitializer,
      UpdateActionInitializer,
      PopupActionInitializer,
      SaveRecordActionInitializer,
      UpdateRecordActionInitializer,
      CreateSubmitActionInitializer,
      UpdateSubmitActionInitializer,
      BulkDestroyActionInitializer,
      ExpandableActionInitializer,
      DisassociateActionInitializer,
      FilterActionInitializer,
      RefreshActionInitializer,
      FilterFormItemCustom,
    } as any);

    this.app.schemaInitializerManager.add(blockInitializers);
    this.app.schemaInitializerManager.add(tableActionInitializers);
    this.app.schemaInitializerManager.add(tableColumnInitializers);
    this.app.schemaInitializerManager.add(tableActionColumnInitializers);
    this.app.schemaInitializerManager.add(formItemInitializers);
    this.app.schemaInitializerManager.add(formActionInitializers);
    this.app.schemaInitializerManager.add(detailsActionInitializers);
    this.app.schemaInitializerManager.add(readPrettyFormItemInitializers);
    this.app.schemaInitializerManager.add(readPrettyFormActionInitializers);
    this.app.schemaInitializerManager.add(createFormBlockInitializers);
    this.app.schemaInitializerManager.add(customizeCreateFormBlockInitializers);
    this.app.schemaInitializerManager.add(customFormItemInitializers);
    this.app.schemaInitializerManager.add(filterFormActionInitializers);
    this.app.schemaInitializerManager.add(createFormActionInitializers);
    this.app.schemaInitializerManager.add(updateFormActionInitializers);
    this.app.schemaInitializerManager.add(filterFormItemInitializers);
    this.app.schemaInitializerManager.add(gridCardActionInitializers);
    this.app.schemaInitializerManager.add(gridCardItemActionInitializers);

    this.app.schemaInitializerManager.add(listActionInitializers);
    this.app.schemaInitializerManager.add(listItemActionInitializers);
    this.app.schemaInitializerManager.add(recordBlockInitializers);
    this.app.schemaInitializerManager.add(recordFormBlockInitializers);
    this.app.schemaInitializerManager.add(subTableActionInitializers);
    this.app.schemaInitializerManager.add(tableSelectorInitializers);
    this.app.schemaInitializerManager.add(tabPaneInitializers_deprecated);
    this.app.schemaInitializerManager.add(tabPaneInitializersForRecordBlock);
    this.app.schemaInitializerManager.add(tabPaneInitializersForBulkEditFormBlock);
    this.app.schemaInitializerManager.add(menuItemInitializer_deprecated);
    this.app.schemaInitializerManager.add(menuItemInitializer);
  }
}
