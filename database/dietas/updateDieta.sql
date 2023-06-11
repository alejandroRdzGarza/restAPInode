UPDATE [dbo].[dieta]
SET [IDcategoria] = @IDcategoria
    ,[IDalimento] = @IDalimento
    ,[IDusuario] = @IDusuario
    ,[fecha] = @fecha
WHERE [IDdieta] = @IDdieta

SELECT [IDdieta]
        ,[IDcategoria]
        ,[IDalimento]
        ,[IDusuario]
        ,[fecha]
FROM [dbo].[dieta]
WHERE [IDdieta] = @IDdieta