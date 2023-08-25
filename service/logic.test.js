const LogicRegister = require('./logic-register');

describe('validInput', () => {
  const serv= new LogicRegister();
  it('should return true for input "W"', () => {
    expect(serv.validInput('W')).toBe(true);
  });

  it('should return true for input "MWCCMW"', () => {
    expect(serv.validInput('MWCCMW')).toBe(true);
  });

  it('should return true for input "WWWMCCC"', () => {
    expect(serv.validInput('WWWMCCC')).toBe(true);
  });

  it('should return false for input "WMCXYZ"', () => {
    expect(serv.validInput('WMCXYZ')).toBe(false);
  });

  it('should return false for input "WMZ"', () => {
    expect(serv.validInput('WMZ')).toBe(false);
  });
});


describe('register', () => {
  const serv= new LogicRegister();

  it('should return true and process input "MWCCMW"', () => {
    expect(serv.register('MWCCMW')).toBe(true);
  });

  it('should return false and not process input "WMCXYZ"', () => {
    expect(serv.register('WMCXYZ')).toBe(false);
  });

  it('should return true and process input "MWM"', () => {
    expect(serv.register('MWM')).toBe(true);
  });

  it('should return true and process input "CCM"', () => {
    expect(serv.register('CCM')).toBe(true);
  });

  it('should return true and process input "WCCMMM"', () => {
    expect(serv.register('WCCMMM')).toBe(true);
  });
});
