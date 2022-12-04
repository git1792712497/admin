# **Content-Type的使用**

request 的Content-Type
一般我们在开发的过程中需要注意客户端发送请求（Request）时的Content-Type设置，特别是使用ajax的时候，如果设置得不准确，很有可能导致请求失败。比如在spring中，如果接口使用了@RequestBody，spring强大的自动解析功能，会将请求实体的内容自动转换为Bean，但前提是请求的Content-Type必须设置为application/json，否正就会返回415错误。

注：415 错误是 Unsupported media type，即不支持的媒体类型。
建议：
如果是一个restful接口（json格式），一般将Content-Type设置为application/json; charset=UTF-8；
如果是文件上传，一般Content-Type设置为multipart/form-data
如果普通表单提交，一般Content-Type设置为application/x-www-form-urlencoded