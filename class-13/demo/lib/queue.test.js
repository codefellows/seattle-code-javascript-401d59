'use strict';

const { StandardQueue, FifoQueue } = require('./Queues.js');

describe('Testing our Queue classes', () => {
  test('Should be able to create a fifo queue that can manage orders', () => {
    let payload1 = {
      bankId: 'test1',
      clientId: 'test1',
      amount: 100,
    }
    let payload2 = {
      bankId: 'test2',
      clientId: 'test2',
      amount: 200,
    }

    let withdrawQueue = new FifoQueue('withdrawals');

    withdrawQueue.add(payload1);
    withdrawQueue.add(payload2);

    console.log(withdrawQueue);
    expect(withdrawQueue.peek()).toEqual(payload1);
    expect(withdrawQueue.getNext()).toEqual(payload1);
    expect(withdrawQueue.peek()).toEqual(payload2);
  });

  test('Should be able to create a standard queue and manage deposits', () => {
    let payload1 = {
      bankId: 'test1',
      clientId: 'test1',
      amount: 100,
    }
    let payload2 = {
      bankId: 'test2',
      clientId: 'test2',
      amount: 200,
    }

    let depositQueue = new StandardQueue('deposits');

    let id1 = depositQueue.set(1, payload1);
    let id2 = depositQueue.set(2, payload2);

    console.log(depositQueue);
    expect(depositQueue.get(id1)).toEqual(payload1);
    expect(depositQueue.remove(id1)).toEqual(payload1);
    expect(depositQueue.get(id1)).not.toBeTruthy();
    expect(depositQueue.get(id2)).toEqual(payload2);
  });
})