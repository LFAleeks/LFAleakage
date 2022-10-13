<?php

namespace LFA\Composer\Autoload;

class ComposerStaticInitFiles
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Files\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'LFA\\OCA\\Files\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );
    /** lfaleeks */

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/LFA/composer/InstalledVersions.php',
        'LFA\\OCA\\Files\\Activity\\FavoriteProvider' => __DIR__ . '/..' . '/../lib/Activity/FavoriteProvider.php',
        'LFA\\OCA\\Files\\Activity\\Filter\\Favorites' => __DIR__ . '/..' . '/../lib/Activity/Filter/Favorites.php',
        'LFA\\OCA\\Files\\Activity\\Filter\\FileChanges' => __DIR__ . '/..' . '/../lib/Activity/Filter/FileChanges.php',
        'LFA\\OCA\\Files\\Activity\\Helper' => __DIR__ . '/..' . '/../lib/Activity/Helper.php',
        'LFA\\OCA\\Files\\Activity\\Provider' => __DIR__ . '/..' . '/../lib/Activity/Provider.php',
        'LFA\\OCA\\Files\\Activity\\Settings\\FavoriteAction' => __DIR__ . '/..' . '/../lib/Activity/Settings/FavoriteAction.php',
        'LFA\\OCA\\Files\\Activity\\Settings\\FileActivitySettings' => __DIR__ . '/..' . '/../lib/Activity/Settings/FileActivitySettings.php',
        'LFA\\OCA\\Files\\Activity\\Settings\\FileChanged' => __DIR__ . '/..' . '/../lib/Activity/Settings/FileChanged.php',
        'LFA\\OCA\\Files\\Activity\\Settings\\FileFavoriteChanged' => __DIR__ . '/..' . '/../lib/Activity/Settings/FileFavoriteChanged.php',
        'LFA\\OCA\\Files\\App' => __DIR__ . '/..' . '/../lib/App.php',
        'LFA\\OCA\\Files\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'LFA\\OCA\\Files\\BackgroundJob\\CleanupDirectEditingTokens' => __DIR__ . '/..' . '/../lib/BackgroundJob/CleanupDirectEditingTokens.php',
        'LFA\\OCA\\Files\\BackgroundJob\\CleanupFileLocks' => __DIR__ . '/..' . '/../lib/BackgroundJob/CleanupFileLocks.php',
        'LFA\\OCA\\Files\\BackgroundJob\\DeleteOrphanedItems' => __DIR__ . '/..' . '/../lib/BackgroundJob/DeleteOrphanedItems.php',
        'LFA\\OCA\\Files\\BackgroundJob\\ScanFiles' => __DIR__ . '/..' . '/../lib/BackgroundJob/ScanFiles.php',
        'LFA\\OCA\\Files\\BackgroundJob\\TransferOwnership' => __DIR__ . '/..' . '/../lib/BackgroundJob/TransferOwnership.php',
        'LFA\\OCA\\Files\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'LFA\\OCA\\Files\\Collaboration\\Resources\\Listener' => __DIR__ . '/..' . '/../lib/Collaboration/Resources/Listener.php',
        'LFA\\OCA\\Files\\Collaboration\\Resources\\ResourceProvider' => __DIR__ . '/..' . '/../lib/Collaboration/Resources/ResourceProvider.php',
        'LFA\\OCA\\Files\\Command\\DeleteOrphanedFiles' => __DIR__ . '/..' . '/../lib/Command/DeleteOrphanedFiles.php',
        'LFA\\OCA\\Files\\Command\\RepairTree' => __DIR__ . '/..' . '/../lib/Command/RepairTree.php',
        'LFA\\OCA\\Files\\Command\\Scan' => __DIR__ . '/..' . '/../lib/Command/Scan.php',
        'LFA\\OCA\\Files\\Command\\ScanAppData' => __DIR__ . '/..' . '/../lib/Command/ScanAppData.php',
        'LFA\\OCA\\Files\\Command\\TransferOwnership' => __DIR__ . '/..' . '/../lib/Command/TransferOwnership.php',
        'LFA\\OCA\\Files\\Controller\\AjaxController' => __DIR__ . '/..' . '/../lib/Controller/AjaxController.php',
        'LFA\\OCA\\Files\\Controller\\ApiController' => __DIR__ . '/..' . '/../lib/Controller/ApiController.php',
        'LFA\\OCA\\Files\\Controller\\DirectEditingController' => __DIR__ . '/..' . '/../lib/Controller/DirectEditingController.php',
        'LFA\\OCA\\Files\\Controller\\DirectEditingViewController' => __DIR__ . '/..' . '/../lib/Controller/DirectEditingViewController.php',
        'LFA\\OCA\\Files\\Controller\\TemplateController' => __DIR__ . '/..' . '/../lib/Controller/TemplateController.php',
        'LFA\\OCA\\Files\\Controller\\TransferOwnershipController' => __DIR__ . '/..' . '/../lib/Controller/TransferOwnershipController.php',
        'LFA\\OCA\\Files\\Controller\\ViewController' => __DIR__ . '/..' . '/../lib/Controller/ViewController.php',
        'LFA\\OCA\\Files\\Db\\TransferOwnership' => __DIR__ . '/..' . '/../lib/Db/TransferOwnership.php',
        'LFA\\OCA\\Files\\Db\\TransferOwnershipMapper' => __DIR__ . '/..' . '/../lib/Db/TransferOwnershipMapper.php',
        'LFA\\OCA\\Files\\DirectEditingCapabilities' => __DIR__ . '/..' . '/../lib/DirectEditingCapabilities.php',
        'LFA\\OCA\\Files\\Event\\LoadAdditionalScriptsEvent' => __DIR__ . '/..' . '/../lib/Event/LoadAdditionalScriptsEvent.php',
        'LFA\\OCA\\Files\\Event\\LoadSidebar' => __DIR__ . '/..' . '/../lib/Event/LoadSidebar.php',
        'LFA\\OCA\\Files\\Exception\\TransferOwnershipException' => __DIR__ . '/..' . '/../lib/Exception/TransferOwnershipException.php',
        'LFA\\OCA\\Files\\Helper' => __DIR__ . '/..' . '/../lib/Helper.php',
        'LFA\\OCA\\Files\\Listener\\LegacyLoadAdditionalScriptsAdapter' => __DIR__ . '/..' . '/../lib/Listener/LegacyLoadAdditionalScriptsAdapter.php',
        'LFA\\OCA\\Files\\Listener\\LoadSidebarListener' => __DIR__ . '/..' . '/../lib/Listener/LoadSidebarListener.php',
        'LFA\\OCA\\Files\\Migration\\Version11301Date20191205150729' => __DIR__ . '/..' . '/../lib/Migration/Version11301Date20191205150729.php',
        'LFA\\OCA\\Files\\Notification\\Notifier' => __DIR__ . '/..' . '/../lib/Notification/Notifier.php',
        'LFA\\OCA\\Files\\Search\\FilesSearchProvider' => __DIR__ . '/..' . '/../lib/Search/FilesSearchProvider.php',
        'LFA\\OCA\\Files\\Service\\DirectEditingService' => __DIR__ . '/..' . '/../lib/Service/DirectEditingService.php',
        'LFA\\OCA\\Files\\Service\\OwnershipTransferService' => __DIR__ . '/..' . '/../lib/Service/OwnershipTransferService.php',
        'LFA\\OCA\\Files\\Service\\TagService' => __DIR__ . '/..' . '/../lib/Service/TagService.php',
        'LFA\\OCA\\Files\\Settings\\PersonalSettings' => __DIR__ . '/..' . '/../lib/Settings/PersonalSettings.php',
    );
    /** lfaleekage */

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitFiles::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitFiles::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitFiles::$classMap;

        }, null, ClassLoader::class);
    }
}
/** LFAcode */