export function convertToJson(action: string, to: string) {
  const actionData = new FormData()
  actionData.append(
    'json',
    JSON.stringify({
      _action: action,
      to: to,
    })
  )
  return actionData
}
