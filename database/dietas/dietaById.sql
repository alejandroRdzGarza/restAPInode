SELECT [IDdieta]
        ,[IDcategoria]
        ,[IDalimento]
        ,[IDusuario]
        ,[fecha]
FROM [dbo].[dieta]
WHERE [IDdieta] = @IDdieta
