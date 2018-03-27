/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AsyncStorage
} from 'react-native';

let angryMood = require('./image/80.png');
let peaceMood = require('./image/80.png');
let happyMood = require('./image/80.png');
let sadMood = require('./image/80.png');
let miseryMood = require('./image/80.png');

export default class DataHandler {
  static realDairyList = [];
  static listIndex = 0;
  static getAllTheDiary() {
    return new Promise(
      function( resolve, reject ) {
        // AsyncStorage.clear();
        AsyncStorage.getAllKeys().then(
          (keys)=>{
            if(keys.length === 0) {
              resolve( DataHandler.realDairyList );
              return;
            }

            AsyncStorage.multiGet(keys).then(
              (results)=>{
                console.log('results' + results);
                let resultLength = results.length;
                for (let counter = 0; counter < resultLength; counter++) {
                  DataHandler.realDairyList[counter] = JSON.parse(results[counter][1]);
                  console.log('realDairyList' + DataHandler.realDairyList[counter]);

                  switch (DataHandler.realDairyList[counter].mood) {
                    case 2:
                        DataHandler.realDairyList[counter].mood = angryMood;
                        break;
                    case 3:
                        DataHandler.realDairyList[counter].mood = sadMood;
                        break;
                    case 4:
                       DataHandler.realDairyList[counter].mood = happyMood;
                       break;
                    case 5:
                       DataHandler.realDairyList[counter].mood = miseryMood;
                       break;
                    default:
                       DataHandler.realDairyList[counter].mood = peaceMood;
                       break;
                  }
                  let atime = new Date(DataHandler.realDairyList[counter].time);
                  DataHandler.realDairyList[counter].time = '' + atime.getFullYear() + '年' + (atime.getMonth() + 1) +'月' + atime.getDate() + '日 星期' + (atime.getDay() + 1) + ' ' + atime.getHours() + ':' + atime.getMinutes();
                }
                console.log('DataHandler.realDairyList' + DataHandler.realDairyList);
                DataHandler.bubleSortDiaryList();
                resolve( DataHandler.realDairyList );
              }
            ).catch (
              (error)=>{
                console.log(error);
              }
            );
          }
        ).catch (
          (error)=>{
            console.log('A error happens while read all the diary.');
            console.log(error);
            AsyncStorage.clear();
            resolve(DataHandler.realDairyList);
          }
        );
      }
    );
  }

  static bubleSortDiaryList() {
    let tempObj;
    for (let i = 0; i < DataHandler.realDairyList.length; i++) {
      for (let j = 0; j < DataHandler.realDairyList.length - i - 1; j++) {
        if (DataHandler.realDairyList[j].index > DataHandler.realDairyList[j + 1].index) {
          tempObj = DataHandler.realDairyList[j];
          DataHandler.realDairyList[j] = DataHandler.realDairyList[j + 1];
          DataHandler.realDairyList[j + 1] = tempObj;
        }
      }
    }
  }

  static getPreviousDiary() {
    if (DataHandler.listIndex < 1) {
      return null;
      DataHandler.listIndex--;
      return {
        uiCode: 2,
        diaryTime: DataHandler.realDairyList[DataHandler.listIndex].time,
        diaryTitle: DataHandler.realDairyList[DataHandler.listIndex].title,
        diaryMood: DataHandler.realDairyList[DataHandler.listIndex].mood,
        diaryBody: DataHandler.realDairyList[DataHandler.listIndex].body,
      };
    }
  }

  static getDiaryAtIndex(aIndex) {
    DataHandler.listIndex = aIndex;
    return {
      uiCode: 2,
      diaryTime: DataHandler.realDairyList[DataHandler.listIndex].time,
      diaryTitle: DataHandler.realDairyList[DataHandler.listIndex].title,
      diaryMood: DataHandler.realDairyList[DataHandler.listIndex].mood,
      diaryBody: DataHandler.realDairyList[DataHandler.listIndex].body,
    };
  }

  static getNextDiary() {
    if (DataHandler.listIndex >= (DataHandler.realDairyList.length - 1)) {
      return null;
      DataHandler.listIndex++;
      return {
        uiCode: 2,
        diaryTime: DataHandler.realDairyList[DataHandler.listIndex].time,
        diaryTitle: DataHandler.realDairyList[DataHandler.listIndex].title,
        diaryMood: DataHandler.realDairyList[DataHandler.listIndex].mood,
        diaryBody: DataHandler.realDairyList[DataHandler.listIndex].body,
      };
    }
  }

  static saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle) {
    return new Promise( function( resolve, reject) {
      let currentTime = new Date();
      let timeString = '' + currentTime.getFullYear() + '年' + (currentTime.getMonth() + 1) +'月' + currentTime.getDate() + '日 星期' + (currentTime.getDay() + 1) + ' ' + currentTime.getHours() + ':' + currentTime.getMinutes();
      let aDiary = Object();
      aDiary.title = newDiaryTitle;
      aDiary.body = newDiaryBody;
      aDiary.mood = newDiaryMood;
      aDiary.sectionID = '' + currentTime.getFullYear() + ' 年 ' + (currentTime.getMonth() + 1) + '月';
      aDiary.index = Date.parse(currentTime);
      AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(
        ()=>{
          let totalLength = DataHandler.realDairyList.length;
          aDiary.time = timeString;
          DataHandler.realDairyList[totalLength] = aDiary;
          let newMoodIcon;
          switch (newDiaryMood) {
            case 2:
              newMoodIcon = angryMood;
            break;
            case 3:
              newMoodIcon = sadMood;
            break;
            case 4:
              newMoodIcon = happyMood;
            break;
            case 5:
              newMoodIcon = miseryMood;
            break;
            default:
              newMoodIcon = peaceMood;
              break;
          }
          DataHandler.realDairyList[totalLength].mood = newMoodIcon;
          let aValue = {
            uiCode: 1,
            diaryList: DataHandler.realDairyList
          }
          resolve(aValue);
        }
      ).catch(
        (error)=>{
          console.log('Saving failed, error ' + error.message);
        }
      )
    });
  }
}