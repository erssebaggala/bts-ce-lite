export const SAVE_CM_PARSING_FOLDERS = 'SAVE_CM_PARSING_FOLDERS';


export const UPDATE_PROCESS_CM_TIMER = 'UPDATE_PROCESS_CM_TIMER';

/**
* Save the input and output folder used during the last parsing session
*
* @param string inputFolder 
* @param string outputFolder 
*/
export function saveCMParsingFolders(inputFolder, outputFolder){
    return {
        type: SAVE_CM_PARSING_FOLDERS,
		inputFolder: inputFolder,
		outputFolder: outputFolder
    };
}

/*
* Update timer on the process cm module form
*
* @param string timerValue
*/
export function updateProcessCMTimer(timerValue){
	return {
		type: UPDATE_PROCESS_CM_TIMER,
		timerValue: timerValue
	};
}