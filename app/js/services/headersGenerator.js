var app = angular.module('twitterListViewer');

app.service('headersGenerator', function(authService, $q) {


    this.getKeys = function(method, baseURL, params) {
    	var bigdeferred = $q.defer();
        var nonceGen = function(length) {
            var nonceChars = "0123456789abcdefghijklmnopABCDEFGHIJKLMNOP";
            var result = "";
            for (var i = 0; i < length; i++) {
                result += nonceChars.charAt(Math.floor(Math.random() * nonceChars.length));
            }

            return result;
        };
        var percentEncode = function(str) {
            return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                return '%' + c.charCodeAt(0).toString(16);
            });
        };
        var signatureGen = function(OAUTH, params) {
        	var deferred = $q.defer();
            var createParamStr = function(OAUTH, params) {
                newObj = {};
                arrOfKeys = [];

                if(params){
	                //separate out param key from param value
	                 var paramsArr = params.split(/[=&]/g);

	        		for(var i = 0; i < paramsArr.length; i+=2){
	        			newObj[percentEncode(paramsArr[i])] = percentEncode(paramsArr[i+1]);
	        		}
	        	}

	        	// if(bodyKey && bodyValue){
	        	// 	newObj[percentEncode(bodyKey)] = percentEncode(bodyValue);
	        	// }


                
                for (key in OAUTH) {
                    newObj[percentEncode(key)] = percentEncode(OAUTH[key]);
                }

                arr = Object.keys(newObj);
                arr.sort();
                

                var ParamStr = "";

                for (var i = 0; i < arr.length; i++) {
                    ParamStr += arr[i] + '=' + newObj[arr[i]];
                    if (i < arr.length - 1) {
                        ParamStr += '&';
                    }
                }

                return ParamStr;
            };
            paramStr = createParamStr(OAUTH, params);
            console.log(paramStr);
            var signatureBase = method.toUpperCase() + '&' + percentEncode(baseURL) + '&' + percentEncode(paramStr);
            console.log(signatureBase);
            var signingKey = percentEncode(consumerSecret) + "&" + percentEncode(tokenSecret);
            var hash = CryptoJS.HmacSHA1(signatureBase, signingKey);
            var result = hash.toString(CrytoJS.enc.Base64);

            deferred.resolve(result);

            return deferred.promise;
        };

        var buildHeader = function(OAUTH) {
            var DST = 'OAuth ';
            for (key in OAUTH) {
                DST += percentEncode(key) + '="' +
                    percentEncode(OAUTH[key]) + '", ';
            }
            DST = DST.slice(0, DST.length - 2);
            return DST;
        };  

        var OAUTH = []
        OAUTH.oauth_consumer_key = "71X5pnw5f3j4joC2OIiRXqW6V";
        OAUTH.oauth_nonce = nonceGen(32);
        OAUTH.oauth_signature = "";
        OAUTH.oauth_signature_method = "HMAC-SHA1";
        OAUTH.oauth_timestamp = Math.floor(Date.now() / 1000);
        OAUTH.oauth_token = "";
        OAUTH.oauth_version = "1.0";

        var consumerSecret = 'yzEEirfGIQshJvsOHp2RP4kRdnQU47gXMHnWPFIHXe2G7vNaaz';
        var tokenSecret;
        var headers;

        authService.getStatus().then(function(user) {

            OAUTH.oauth_token = user.accessToken;
            tokenSecret = user.accessTokenSecret;
            signatureGen(OAUTH, params).then(function(result){
            	OAUTH.oauth_signature = result;
            	headers = buildHeader(OAUTH);
            	bigdeferred.resolve(headers);

            });
        });

        
        
        
        return bigdeferred.promise;

    }

});
