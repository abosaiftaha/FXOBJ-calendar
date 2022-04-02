import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import moment from 'moment';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
    Cols,
    Cell,
} from 'react-native-table-component';

import styles from './Calendar.styles';

const getFirstDayOfMonth = today => {
    let firstDay = moment(today).startOf('month').format('d');
    return firstDay;
};
const getDaysInMonth = today => {
    return today.daysInMonth();
};
const DayHeader = () => {
    const weekDays = moment.weekdaysShort();
    const firstDayOfMonth = getFirstDayOfMonth(moment());
    let blanks: Array<string> = [];
    let daysInMonth: any = [];
    let rows = [];
    let cells = [];
    for (let i = 0; i < +firstDayOfMonth; i++) {
        blanks.push('');
    }

    for (let d = 1; d <= getDaysInMonth(moment()); d++) {
        daysInMonth.push(d);
    }

    let totalSlots = [...blanks, ...daysInMonth];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows
            cells = []; // empty container
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) {
            // when end loop we add remain date
            rows.push(cells);
        }
    });

    daysInMonth = <Rows data={rows} textStyle={styles.textColor} />;

    return (
        <>
            <Row data={weekDays} textStyle={styles.textColor} />
            {rows.map((cellData, cellIndex) => (
                <Row
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.textColor}
                />
            ))}
        </>
    );
};

export default DayHeader;
