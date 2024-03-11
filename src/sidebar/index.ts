import { sidebar_algorithm } from "./sidebar_algorithm";
import { sidebar_build_tools } from "./sidebar_build_tools";
import { sidebar_tools } from "./sidebar_tools";
import { sidebar_static_site_generator } from "./sidebar_static_site_generator";
import { sidebar_linux } from "./sidebar_linux";
import { sidebar_container } from "./sidebar_container";
import { sidebar_dev_lang } from "./sidebar_dev_lang";
import { sidebar_deployment } from "./sidebar_deployment";
import { sidebar_network } from "./sidebar_network";

export const sidebar_config = {
    "/blog/": [
        sidebar_dev_lang,
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
