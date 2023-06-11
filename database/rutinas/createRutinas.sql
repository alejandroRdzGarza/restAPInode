INSERT INTO [dbo].[rutina]
    (
         [dia]
        ,[IDejercicio]
        ,[IDusuario]
    )
VALUES (
    @dia
    ,@IDejercicio
    ,@IDusuario
)

SELECT SCOPE_IDENTITY() AS IDrutina


