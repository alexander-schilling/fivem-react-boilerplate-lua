UI_LOADED = false

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)

RegisterNUICallback('getClientData', function(data, cb)
  debugPrint('Data sent by React', json.encode(data))

-- Lets send back client coords to the React frame for use
  local curCoords = GetEntityCoords(PlayerPedId())

  local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
  cb(retData)
end)

RegisterNUICallback('uiLoaded', function(_, cb)
  UI_LOADED = true
  cb({})
end)

-- Just a example thread on how to send data to React
-- on resource startup, otherwise, it could not catch
-- the event if the React frame is not loaded yet
CreateThread(function()
  while not UI_LOADED do
    Wait(100)
  end

  while not ESX.IsPlayerLoaded() do
    Wait(500)
  end

  local userToken = ESX.GetToken()

  SendReactMessage('setToken', userToken)
end)
