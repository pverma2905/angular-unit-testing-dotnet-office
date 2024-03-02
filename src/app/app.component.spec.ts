import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {

  let component = new AppComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UnitTest1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UnitTest1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('UnitTest1 app is running!');
  });

  it('My testcase',()=>{
    expect(true).toBe(true);
  })

  it('Show Alert Message',()=>{
  expect(component.ShowMessage("Hello")).toBe('Hello')
  })

  xit('show the addition resul',()=>{
    expect(Addition(10,20)).toBe(30)
    expect(Addition(10,20)).toBeGreaterThan(20)
  })

  it('toBe and toEqual testcase',()=>{
    var a ='Hello';
    var b ='Hello';
    expect(a).toBe(b);
    expect(a).toEqual(b);

    // var a =[1];
    // var b =[1];
    // expect(a).toBe(b);
    // expect(a).toBe(b);
  })

  it('toBe, toBeTrue(),tobeTruthy()',()=>{
    var a='Hello';
    var b=true
    expect(a).toBe('Hello')
    expect(b).toBeTrue();
    expect(b).toBeTruthy();
    expect(undefined).toBeFalsy();
    // expect(undefined).toBeFalse();
    expect('1').toBeTruthy();
    expect('0').toBeTruthy();
    expect(NaN).toBeFalsy();
    expect('').toBeFalsy();
    // expect('0').toBeFalsy();
    
  })

  it('toBeGreaterThanOrEqual,toBeLessThan,toBeGreaterThan',()=>{
    var a =5;
    expect(a).toBeGreaterThanOrEqual(5)
    expect(a).toBeLessThan(7)
    expect(a).toBeGreaterThan(3)
  })

  
  it('jasmine matcher match function',()=>{
    var input = 'The dotnet office tutorial';
    var strphone ="001-789-56-67"
    expect(input).toMatch(/dotnet office/)
    expect(input).toMatch(/dotnet office/i)
    expect(input).not.toMatch(/dot1/)
    expect(strphone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
    })

    it('jasmine matcher toBe close to',()=>{
      var pi = 3.1415926, e=2.78
      expect(pi).not.toBeCloseTo(e);
      expect(pi).toBeCloseTo(e,0);
      expect(4.334).toBeCloseTo(4.334);
      expect(4.334).toBeCloseTo(4.334,1);
      expect(4.334).toBeCloseTo(4.334,2);
      expect(4.334).not.toBeCloseTo(4.3,2);
      expect(4.334).not.toBeCloseTo(4.22,3);
      expect(4.334).not.toBeCloseTo(4.22,4);
      })

      it('jasmine matcher tobe defined',()=>{
        var MyObj ={
          foo:"foo"
        }
        var Myfunction = (function() {})();
        var strUndefined;
        expect("The Dotnet office").toBeDefined();
        expect(MyObj).toBeDefined();
        expect(MyObj.foo).toBeDefined();
        expect(Myfunction).not.toBeDefined();
        expect(strUndefined).not.toBeDefined();
      })
      it('jasmine matcher tobe Undefined',()=>{
        var MyObj ={
          foo:"foo"
        }
        var Myfunction = (function() {})();
        var strUndefined;
        expect(MyObj).not.toBeUndefined();
        expect(MyObj.foo).not.toBeUndefined();
        expect(Myfunction).toBeUndefined();
        expect(strUndefined).toBeUndefined();
      })

      it('jasmine matcher-toBeNull',()=>{
        var nullValue = null;
        var valueUndefined;
        var notNull = "notNull";
        expect(null).toBeNull();
        expect(nullValue).toBeNull();
        expect(valueUndefined).not.toBeNull();
        expect(notNull).not.toBeNull();
      })

      it('jasmine matcher-tobeNan',()=>{
        expect(0/0).toBeNaN();
        expect(0/5).not.toBeNaN();
      })

      it('jasmine matcher-toBePositiveInfinity',()=>{
        expect(1/0).toBePositiveInfinity();
      })

      it('jasmine matcher-toBeNegativeInfinity',()=>{
        expect(-1/0).toBeNegativeInfinity();
      })

      
});
