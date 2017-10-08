const astijan = function (num1, num2){
	if(num2<=0){
	return "1";
}
	if(num1>1){
	return num1 * astijan(num1, num2-1);
}
};

console.log (astijan( 4, 3));

///////////////////////////////////////////////////

const astxer = function(e){
	if(e<= 0){
	return " ";
	}
	return "*" + astxer(e-1);
};

const space = function (m){
	if(m<= 0){
	return " ";
	}
	return " " + space(m-1);
};

const miacum = function ( a, b, c){
	if(a<=0){
	return;
	}
		console.log(space(b)+astxer(c));
		miacum((a-1),(b+1),(c-2));
};

const erkarutyun = function(n) {
	miacum(n,0,2 * n-1)
};
erkarutyun(10);

////////////////////////////////////////////////////

const reverse = function (str){
  const length = str.length;
const reverse2 = function (str, erkarutyun){
  if(erkarutyun<=0){
    return "";
  }
  return str[erkarutyun-1] + reverse2(str, erkarutyun-1)
}
  return reverse2(str, length);
};

console.log(reverse("kaxamb"));


///////////////////////////////////////

const astghik=function(x){
	if(x<=0){ return ""; } 
      return "* "+astghik(x-1); 
 };
	
const astghik1=function(n){ 
    if(n<=0){ return ""; } 
      return " *"+astghik1(n-1); 
 };
 
 const func=function(x,y,z){
	 if(x<=0){ return ""
	 ; }
 if(z%2===0){
	 console.log(astghik(y)); func(x-1,y,z-1)
	 ;} else
 { console.log (astghik1(y)); func(x-1,y,z-1); }
 };
 const checkerbox=function(n){
	 if(n%2===0){ func(n,n,n); } 
	 else{
  console.log(astghik(n)); func(n-1,n,n); } 
 };
checkerbox(5);
