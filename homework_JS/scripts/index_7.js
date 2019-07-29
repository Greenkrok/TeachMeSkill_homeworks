{
    const S = 2;
        console. log('Размер ипотечного кредита =', S, 'млн. руб.');
    const s = S * 1000000;
    const p = 10;
        console. log('Процентная годовая ставка =', p, '%');
    const years = 5;
        console. log('Кол-во лет =', years);
    const i = p/100/12;
    const n = years * 12;
    const m = (1 + i) ** n;
    const e = s * ((i * m) / (m - 1));
        console. log('Ежемесячный платёж =', e, 'руб.');
    const Pereplata = (n * e) - s;
        console. log('Переплата =', Pereplata, 'руб.');
        console.log('==========END TASK 7==========');
}