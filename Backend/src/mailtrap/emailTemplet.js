export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 10px;">
        
        <table width="100%" max-width="600px" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="background:#4CAF50; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Verify Your Email</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <p style="margin:0 0 15px;">Hello,</p>

              <p style="margin:0 0 20px;">
                Thanks for signing up! Use the verification code below:
              </p>

              <div style="text-align:center; margin:30px 0;">
                <span style="display:inline-block; background:#f0fdf4; color:#4CAF50; padding:15px 25px; font-size:28px; font-weight:bold; letter-spacing:6px; border-radius:8px;">
                  {verificationCode}
                </span>
              </div>

              <p style="margin:0 0 10px;">This code expires in 15 minutes.</p>

              <p style="margin:0 0 20px;">
                If you didn’t create this account, you can safely ignore this email.
              </p>

              <p style="margin:0;">Best regards,<br><strong>Your App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:15px; font-size:12px; color:#999;">
              This is an automated email. Please do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 10px;">
        
        <table width="100%" max-width="600px" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="background:#4CAF50; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Password Reset Successful</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <p>Hello,</p>

              <p>Your password has been successfully reset.</p>

              <div style="text-align:center; margin:30px 0;">
                <div style="background:#4CAF50; color:white; width:60px; height:60px; line-height:60px; border-radius:50%; font-size:28px; margin:auto;">
                  ✓
                </div>
              </div>

              <p>If this wasn’t you, contact support immediately.</p>

              <p><strong>Security tips:</strong></p>
              <ul style="padding-left:20px;">
                <li>Use a strong password</li>
                <li>Enable 2FA</li>
                <li>Don’t reuse passwords</li>
              </ul>

              <p>Best regards,<br><strong>Your App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:15px; font-size:12px; color:#999;">
              Automated message — do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Password</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 10px;">
        
        <table width="100%" max-width="600px" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="background:#4CAF50; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Reset Your Password</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <p>Hello,</p>

              <p>We received a request to reset your password.</p>

              <div style="text-align:center; margin:30px 0;">
                <a href="{resetURL}" 
                   style="background:#4CAF50; color:white; padding:14px 28px; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">
                   Reset Password
                </a>
              </div>

              <p>This link will expire in 1 hour.</p>

              <p>If you didn’t request this, ignore this email.</p>

              <p>Best regards,<br><strong>Your App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:15px; font-size:12px; color:#999;">
              Automated email — do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;