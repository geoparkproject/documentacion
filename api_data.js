define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "doc/version_1_0_0/archives/main.js",
    "group": "/home/matheus/Área de Trabalho/geopark/backend/doc/version_1_0_0/archives/main.js",
    "groupTitle": "/home/matheus/Área de Trabalho/geopark/backend/doc/version_1_0_0/archives/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/",
    "title": "01.Home",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Informações da básicas da API.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da API</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"name\": \"Backend Geopark\",\n    \"version\": \"1.0.0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/users/profile",
    "title": "04.Visualizar dados",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Permite ao usuário logado visualize suas informações.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n    \"name\": \"Rodrigo Cardoso\",\n    \"genre\": \"M\",\n    \"email\": \"rodrigocardoso@geopark.com.br\",\n    \"avatar\": null,\n    \"user_type\": {\n      \"id\": 1,\n      \"type\": \"administrator\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "GetUsersProfile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/recovery_password",
    "title": "02.Email de Recuperação",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Rota para gerar o token de recuperação de senha e envio do email com o token.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"email\": \"jonhdoe@email.com\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Confirmação do envio de email de recuperação com token de acesso</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário inexistente - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"User not exists.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "PostRecovery_password"
  },
  {
    "type": "put",
    "url": "/reset_password",
    "title": "03.Atualização da Senha",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Rota para receber o token de atualização com a nova senha.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token para validação de recuperação</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova senha do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confimação da nova senha cadastrada</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n    \"password\": \"newPassword\",\n    \"newPassword\": \"newPassword\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Confirmação que a senha foi atualizada com sucesso.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário inexistente - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"User not exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Expiração do Token - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Time expires.\"\n}",
          "type": "json"
        },
        {
          "title": "Token Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Token Inválid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "PutReset_password"
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "01.Login/Mobile",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Rota de autenticação para aplicação mobile.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo informações do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nome do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>Objeto contendo informações sobre o nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user.user_type.id",
            "description": "<p>Indentificador do tipo de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.user_type.type",
            "description": "<p>Tipo do nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"user\": {\n        \"email\": \"jonh@email.com\",\n        \"name\": \"Jonh Doe\",\n        \"user_type\": {\n            \"id\": 2,\n            \"type\": \"researcher\"\n        }\n    } \n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email ou senha inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email or password invalid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "PostSessions"
  },
  {
    "type": "put",
    "url": "/users/researcher",
    "title": "02.Atualizar os dados",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Permite ao usuário dentro da aplicação mobile atualizar seus dados.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova Senha do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data da última atualização do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/4c5a37ed8ede1b9efa0e993c2daac0fb.jpeg\",\n    \"id\": 15,\n    \"name\": \"Matheus Maximiano\",\n    \"genre\": \"M\",\n    \"email\": \"matheus@email.com\",\n    \"avatar\": \"4c5a37ed8ede1b9efa0e993c2daac0fb.jpeg\",\n    \"user_type\": {\n      \"id\": 2,\n      \"type\": \"researcher\"\n    },\n    \"updatedAt\": \"2020-05-08T20:56:07.094Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "PutUsersResearcher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/geoparks/geosites/:id",
    "title": "15.Deletar geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados dos geossítios, a partir do id referente do mesmo. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio no qual se deseja excluir os dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Resultado da requisição positiva sem conteúdo na resposta</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentro Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geossítio Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Geosite.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/geoparks/:id",
    "title": "10.Deletar geoparques",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados dos geoparques, a partir do id referente do mesmo. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geoparque no qual se deseja deletar seus dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Resultado da requisição positiva sem conteúdo na resposta</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros Inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Params.\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteGeoparksId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "06.Deletar usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados de outros usuários, desde que sejam apenas pesquisadores, a partir do id referente ao usuário. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário no qual se deseja deletar seus dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Resposta de sucesso ao completar a ação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": \"User successfully deleted.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campo do id inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"The user id is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid user.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteUsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/geoparks",
    "title": "07.Listar todos os geoparques",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todos os geoparques cadastrados na aplicação, que não estejam excluídos.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n         \"id\": 1,\n         \"name\": \"Parque Geológico do Araripe\",\n         \"country\": \"Brasil\",\n         \"hidden\": false,\n         \"image\": null,\n         \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n         \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n     },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/geoparks/geosites/:id",
    "title": "12.Listar todos os geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador recupere as informaçãoes de um geossítio a partir de seu id em específico.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da do geossítio contando com o nome da cidade e o Estado/Província/Região</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geoparque a qual o geossítio pertence</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Cidade - Ceará\",\n     \"image\": null,\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id_geopark\": 1\n     \"hidden\": false,\n     \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/geoparks/:id_geopark/geosites",
    "title": "11.Listar todos os geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todos os geossístios cadastrados na aplicação, a partir do id do geoparque em específico e que não estejam excluídos.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque no qual os geossítios pertencem.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da do geossítio contando com o nome da cidade e o Estado/Província/Região</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geoparque a qual o geossítio pertence</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"name\": \"Colina do Horto\",\n         \"address\": \"Cidade - Ceará\",\n         \"image\": null,\n         \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n         \"id_geopark\": 1\n         \"hidden\": false,\n         \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n         \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n     },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparksId_geoparkGeosites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "02.Listar os usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Lista todos os usuários da aplicação, menos o que estiver autenticado.</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Atributo de uma query para páginação da usuários</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n        \"id\": 2,\n        \"name\": \"Amanda Martins Ferreira\",\n        \"email\": \"amandamartins@geopark.com.pt\",\n        \"avatar\": null,\n        \"created_at\": \"2020-04-28T22:53:49.830Z\",\n        \"user_type\": {\n            \"id\": 1,\n            \"type\": \"administrator\"\n        }\n    },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/geoparks",
    "title": "08.Criar um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos geoparques.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geopark",
            "description": "<p>Campo da imagem do geoparque [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Parque Geológico do Araripe\"\ncountry = \"Brasil\"\navatar_geopark = geopark.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id\": 1,\n     \"name\": \"Parque Geológico do Araripe\",\n     \"country\": \"Brasil\",\n     \"hidden\": false,\n     \"image\": null,\n     \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostGeoparks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/geoparks/:id_geopark/geosites",
    "title": "13.Criar um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos geossítios.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque no qual o novo geossítio pertencerá</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da localização do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geosite",
            "description": "<p>Campo da imagem do geossítio [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Colina do Horto\"\naddress = \"Juazeiro do Norte - Ceará\"\navatar_geosite = geosite.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Localização do geossitio</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geopark no qual o geossítio pertence</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Juazeiro do Norte - Ceará\",\n     \"id_geopark\": 1,\n     \"image\": \"bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"updatedAt\": \"2020-06-03T19:11:39.549Z\",\n     \"createdAt\": \"2020-06-03T19:11:39.549Z\",\n     \"hidden\": false\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostGeoparksId_geoparkGeosites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "03.Criar um usuário",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos usuários.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\nid_type = 2\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Intger",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "201",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"id\": 59,\n    \"name\": \"Ariel Sales\",\n    \"email\": \"ariel@aluno.fapce.edu.br\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/websessions",
    "title": "01.Login/Web",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Rota de autenticação para aplicação web.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"email\": \"jonhdoe@email.com\",\n    \"password\": \"yourpassword\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo informações do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nome do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>Objeto contendo informações sobre o nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user.user_type.id",
            "description": "<p>Indentificador do tipo de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.user_type.type",
            "description": "<p>Tipo do nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"email\": \"jonh@email.com\",\n        \"name\": \"Jonh Doe\",\n        \"user_type\": {\n            \"id\": 1,\n            \"type\": \"administrator\"\n        }\n    }\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email, senha ou permissão inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email or password invalid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostWebsessions"
  },
  {
    "type": "put",
    "url": "/geoparks/geosites/:id",
    "title": "14.Atualizar um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize os dados do geossítio.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio para a atualização</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da localização do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geosite",
            "description": "<p>Campo da imagem do geossítio [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Colina do Horto\"\naddress = \"Juazeiro do Norte - Ceará\"\navatar_geosite = geosite.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Localização do geossitio</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geopark no qual o geossítio pertence</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Juazeiro do Norte - Ceará\",\n     \"id_geopark\": 1,\n     \"image\": \"bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"updatedAt\": \"2020-06-03T19:11:39.549Z\",\n     \"createdAt\": \"2020-06-03T19:11:39.549Z\",\n     \"hidden\": false\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geossítio Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geosite does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/geoparks/:id",
    "title": "09.Atualizar um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize os dados de um geoparque a partir de um id.</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geoparque no qual deseja atualizar seus dados</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geopark",
            "description": "<p>Campo da imagem do geoparque [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Parque Geológico do Araripe\"\ncountry = \"Brasil\"\navatar_geopark = geopark.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id\": 1,\n     \"name\": \"Parque Geológico do Araripe\",\n     \"country\": \"Brasil\",\n     \"hidden\": false,\n     \"image\": null,\n     \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutGeoparksId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/administrator",
    "title": "05.Atualizar Administrador Logado",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize seus dados pessoais na aplicação.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Caso usuário queira alterar a senha ele deve passar sua senha antiga.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova senha desejada.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirmação da senha para evitar erros de digitação.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\noldPassword = \"elderpassword\"\npassword = \"password123456789\"\nconfirmPassword = \"password123456789\"\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Jonh Doe\",\n    \"email\": \"jonhdoe@email.com\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutUsersAdministrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "04.Atualizar usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize dados de outros usuários, desde que sejam apenas pesquisadores, a partir do id referente ao usuário.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário no qual se deseja atualizar seus dados</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\nid_type = 2\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Intger",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "201",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 59,\n    \"name\": \"Ariel Sales\",\n    \"email\": \"ariel@aluno.fapce.edu.br\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutUsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });