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
    var strphone
    
  })
});
