import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/dobbyss/Notion-DoIt-e21d44cfad8140b7864f55fbc7426194?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            },
            {
                database_id: '10d1e50d803f802ba4bbed886d3c3795',
                target_folder: './content/docs/Backend'
            },
            {
                database_id: '10d1e50d803f80a887d1cb5f3771905f',
                target_folder: './content/docs/Infra'
            }
        ],
    }
}

export default userConfig;
