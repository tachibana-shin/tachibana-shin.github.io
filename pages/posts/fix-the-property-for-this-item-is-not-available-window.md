---
title: Fix "The property for this item is not available window"
---

Source: https://thegeekpage.com/the-properties-for-this-item-are-not-available/

Steps:
1. Open RegEdit
2. Backup your regedit
3. Create file fix.reg by content:
```reg
[HKEY_CLASSES_ROOT\Drive\shellex]

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers]

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\EnhancedStorageShell]
@="{2854F705-3548-414C-A113-93E27C808C85}"

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\Sharing]
@="{f81e9010-6ea4-11ce-a7ff-00aa003ca9f6}"

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\{078C597B-DCDD-4D0F-AA16-6EE672D1110B}]

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\{59099400-57FF-11CE-BD94-0020AF85B590}]
@=""

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\{596AB062-B4D2-4215-9F74-E9109B0A8153}]

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\{D6791A63-E7E2-4fee-BF52-5DED8E86E9B8}]
"{D6791A63-E7E2-4fee-BF52-5DED8E86E9B8}"="Portable Devices Menu"

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\{fbeb8a05-beee-4442-804e-409d6c4515e9}]
@=""

[HKEY_CLASSES_ROOT\Drive\shellex\FolderExtensions]

[HKEY_CLASSES_ROOT\Drive\shellex\FolderExtensions\{fbeb8a05-beee-4442-804e-409d6c4515e9}]
"DriveMask"=dword:00000020

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers]
@="{5F5295E0-429F-1069-A2E2-08002B30309D}"

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\Sharing]
@="{f81e9010-6ea4-11ce-a7ff-00aa003ca9f6}"

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{1f2e5c40-9550-11ce-99d2-00aa006e086c}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{4a7ded0a-ad25-11d0-98a8-0800361b1103}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{55B3A0BD-4D28-42fe-8CFB-FA3EDFF969B8}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{596AB062-B4D2-4215-9F74-E9109B0A8153}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{5F5295E0-429F-1069-A2E2-08002B30309D}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{7988B573-EC89-11cf-9C00-00AA00A14F56}]
@=""

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{D12267B4-252D-409A-86F9-81BACD3DCBB2}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{ECCDF543-45CC-11CE-B9BF-0080C87CDBA6}]

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{ef43ecfe-2ab9-4632-bf21-58909dd177f0}]
@=""

[HKEY_CLASSES_ROOT\Drive\shellex\PropertySheetHandlers\{fbeb8a05-beee-4442-804e-409d6c4515e9}]
@=""
```
4. Merge file reg fix
5. Restart Explorer.exe in Task Manager
6. Follow this instruction to correct errors that do not show the used space bar: https://www.partitionwizard.com/partitionmanager/disk-space-usage-bar-missing.html
7. Fix `New` not availible in `Context Menu`: https://www.askvg.com/how-to-restore-missing-new-menuitem-in-desktop-and-explorer-context-menu/
