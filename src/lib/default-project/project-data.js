import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    },
    lists: {
        defaultMessage: 'my list',
        description: 'Name for the default list',
        id: 'gui.defaultProject.lists'
    }
});

messages = {...messages, ...sharedMessages};

// 翻訳関数が渡されなかった場合
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * デフォルトScratchプロジェクト生成
 * @param {Function} translateFunction 翻訳関数
 * @returns {Object} Scratch project JSON
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;

    return {
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: 'backdrop1',
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100,
                layerOrder: 0,
                tempo: 60,
                videoTransparency: 50,
                videoState: 'off',
                textToSpeechLanguage: null
            },
            {
                isStage: false,
                name: 'Code Cat',
                variables: {},
                lists: {
                    'myListID': [translator(messages.lists),['apple', 'banana', 'pineapple']]
                },
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '927d672925e7b99f7813735c484c6922',
                        name: 'Code Cat',
                        md5ext: '927d672925e7b99f7813735c484c6922.svg',
                        dataFormat: 'svg',
                        bitmapResolution: 1,
                        rotationCenterX: 30.74937882782359,
                        rotationCenterY: 58.864768144346826
                    }
                ],
                sounds: [],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        monitors: [],
        extensions: [],
        meta: {
            semver: '3.0.0',
            vm: '0.2.0',
            agent: ''
        }
    };
};

export default projectData;