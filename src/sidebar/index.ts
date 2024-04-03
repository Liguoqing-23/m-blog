import { sidebar_algorithm } from "./sidebar_algorithm";
import { sidebar_build_tools } from "./sidebar_build_tools";
import { sidebar_tools } from "./sidebar_tools";
import { sidebar_static_site_generator } from "./sidebar_static_site_generator";
import { sidebar_linux } from "./sidebar_linux";
import { sidebar_container } from "./sidebar_container";
import { sidebar_dev_lang } from "./sidebar_dev_lang";
import { sidebar_deployment } from "./sidebar_deployment";
import { sidebar_network } from "./sidebar_network";
import { sicebar_environment } from "./sidebar_environment";
import { sidebar_version_control } from "./sidebar_version_control";
import { sidebar_open_source_project } from "./sidebar_open_source_project";

export const sidebar_config = {
    "/blog/": [
        sidebar_dev_lang,
        sicebar_environment,
        sidebar_version_control,
        sidebar_open_source_project,
        sidebar_network,
        sidebar_algorithm,
        sidebar_build_tools,
        sidebar_tools,
        sidebar_static_site_generator,
        sidebar_linux,
        sidebar_container,
        sidebar_deployment,
    ],
};
