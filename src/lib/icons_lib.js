import {ReactComponent as cloud} from '../assets/icons/cloud.svg';
import {ReactComponent as cloudy} from '../assets/icons/cloudy.svg';
import {ReactComponent as moon} from '../assets/icons/moon.svg';
import {ReactComponent as rain} from '../assets/icons/rain.svg';
import {ReactComponent as refresh} from '../assets/icons/refresh.svg';
import {ReactComponent as snowing} from '../assets/icons/snowing.svg';
import {ReactComponent as storm} from '../assets/icons/storm.svg';
import {ReactComponent as sun} from '../assets/icons/sun.svg';

export const ICO = {
	cloud: cloud,
	cloudy: cloudy,
	moon: moon,
	rain: rain,
	refresh: refresh,
	snowing: snowing,
	storm: storm,
	sun: sun,
};

export const WEATHER_CODE_TO_ICO = {
	1000: ICO.sun,
	1003: ICO.cloudy,
	1006: ICO.cloud,
	1009: ICO.rain,
	1030: ICO.cloudy,
	1063: ICO.rain,
	1066: ICO.snowing,
	1069: ICO.snowing,
	1072: ICO.snowing,
	1087: ICO.storm,
	1114: ICO.snowing,
	1117: ICO.storm,
	1135: ICO.cloudy,
	1147: ICO.cloudy,
	1150: ICO.rain,
	1153: ICO.rain,
	1168: ICO.rain,
	1171: ICO.rain,
	1180: ICO.rain,
	1183: ICO.rain,
	1186: ICO.rain,
	1189: ICO.rain,
	1192: ICO.rain,
	1195: ICO.rain,
	1198: ICO.rain,
	1201: ICO.rain,
	1204: ICO.snowing,
	1207: ICO.snowing,
	1210: ICO.snowing,
	1213: ICO.snowing,
	1216: ICO.snowing,
	1219: ICO.snowing,
	1222: ICO.snowing,
	1225: ICO.snowing,
	1237: ICO.snowing,
	1240: ICO.rain,
	1243: ICO.rain,
	1246: ICO.rain,
	1249: ICO.snowing,
	1252: ICO.snowing,
	1255: ICO.snowing,
	1258: ICO.snowing,
	1261: ICO.snowing,
	1264: ICO.snowing,
	1273: ICO.snowing,
	1276: ICO.rain,
	1279: ICO.snowing,
	1282: ICO.snowing
};
