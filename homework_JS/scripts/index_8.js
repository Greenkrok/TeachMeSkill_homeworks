{
    const a = 8;
        console.log('a =', a);
    const b = 3;
        console.log('b =', b);

    const q = 'a + 2(x - b) = 16';
        console.log('Уравнение 1:', q);
    const x = ((16 - a) / 2) + b;
        console.log('x =', x);

    const w = 'b(x + 15) = a + 6x';
        console.log('Уравнение 2:', w);
    const y = (a - (15 * b)) / (b - 6);
        console.log('x =', y);

    const e = 'x + 2x + ax + bx = 23780';
        console.log('Уравнение 3:', e);
    const z = 23780 / (1 + 2 + a + b);
        console.log('x =', z);

        console.log('==========END TASK 8==========');
}