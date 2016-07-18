using System;
using System.Diagnostics;
using System.Security.Cryptography;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace api.tests
{
    [TestClass]
    public class UnitTest1
    {
        // used for generating audience id and audience secret

        [TestMethod]
        public void GenerateEncryptedAudienceData()
        {
            var audienceId = Guid.NewGuid().ToString("N");

            var key = new byte[32];
            RNGCryptoServiceProvider.Create().GetBytes(key);
            var audienceSecret = TextEncodings.Base64Url.Encode(key);

            Debug.WriteLine($"AudienceId: {audienceId}\nAudienceSecret: {audienceSecret}");
        }
    } 
}
