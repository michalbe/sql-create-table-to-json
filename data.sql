CREATE TABLE `dev_access` (
 `id_profile` int(10) unsigned NOT NULL,
 `id_tab` int(10) unsigned NOT NULL,
 `view` int(11) NOT NULL,
 `add` int(11) NOT NULL,
 `edit` int(11) NOT NULL,
 `delete` int(11) NOT NULL,
 PRIMARY KEY (`id_profile`,`id_tab`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `dev_access` (
 `id_profile` int(10) unsigned NOT NULL,
 `id_tab` int(10) unsigned NOT NULL,
 `view` int(11) NOT NULL,
 `add` int(11) NOT NULL,
 `edit` int(11) NOT NULL,
 `delete` int(11) NOT NULL,
 PRIMARY KEY (`id_profile`,`id_tab`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
