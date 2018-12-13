import moment from 'moment';

export const toStandardDate = date => {
	return moment(date).format('DD.MM.YYYY');
};

export const toHumanReadable = timestamp => {
	return moment(timestamp).fromNow();
};

export const toWeekdayName = date => {
	return moment(date)
		.format('dddd')
		.slice(0, 3);
};

export const toDayMonth = date => {
	return moment(date)
		.format('Do MMMM');
};
