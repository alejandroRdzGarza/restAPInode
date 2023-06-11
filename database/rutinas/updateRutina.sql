UPDATE [dbo].[rutina]
SET [dia] = @dia
    ,[IDejercicio] = @IDejercicio
    ,[IDusuario] = @IDusuario
WHERE [IDrutina] = @IDrutina

SELECT [IDrutina]
        ,[dia]
        ,[IDejercicio]
        ,[IDusuario]
FROM [dbo].[rutina]
WHERE [IDrutina] = @IDrutina
