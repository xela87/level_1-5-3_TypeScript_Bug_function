
interface BigObject {
    [a: string]: { value: number | string | undefined | BigObject } | undefined;
};

function summ (a: any): number {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (elem?.cvalue === undefined) return 2021;
        if (typeof elem.cvalue === 'number') return elem.cvalue;
        if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
        return summ(elem.cvalue);
    });
    let sum = 0;
    for (let value of x) sum += value;
    return sum;
}

const a: object = {
    hello: {cvalue: 1},
    bye: {cvalue: "13"},
    world: {
        cvalue:
            {yay: {cvalue: "2"}}
    }
}

const b = {
    hello: {cvalue: 1},
    world: {
        cvalue:
            { 
              yay: { cvalue: "2" },
              grgr: {cvalue: undefined},
              grr: {cvalue: "1q"},
              qq: undefined, 
            }
    },
    grgr: {cvalue: undefined}
}

console.log(`Result of simple object = ` + summ(a))
console.log(`Result of middle object = ` + summ(b))

